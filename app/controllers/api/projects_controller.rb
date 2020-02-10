require 'json'

class Api::ProjectsController < ApplicationController

  
  def index
    @project = nil;
    search = (filter_params[:search_term] || "").downcase
    limit = filter_params[:limit] || 3
    page = filter_params[:page]

    case filter_params[:type]
      when "category"
        @projects = Project.where(category: search).order("due_date asc").includes(:creator, :pledges)
          .page(page).per(limit)
      when "search_term"
        regex = "%#{search}%"
        @projects = Project.where("lower(projects.title) like ? or projects.category = ?", regex, search).distinct.order("due_date asc").includes(:creator, :pledges)
          .page(page).per(limit)
      when "_home"
        @projects = Project.order("due_date asc").includes(:creator, :pledges).limit(10)
      else
        @projects = Project.order("due_date asc").includes(:creator, :pledges).page(page).per(limit)
    end
    
    @last_page = @projects.page(page).per(limit).last_page? || @projects.page(page).per(limit).out_of_range?
    @creators = @projects.map {|project| project.creator}
    @funding_by_projects = @projects.map do |project| 
      project.pledges.map do |pledge|
        pledge.amount
      end.sum
    end
    
    render :index
  end

  def show
    if params[:id] == "_random"
      @project = Project.order("RANDOM()").limit(1)[0]
    else
      @project = selected_project
    end

    @creator = @project.creator
    @rewards = @project.rewards.includes(:pledges)
    @funding_by_reward = @rewards.map do |reward|
      reward.pledges.map do |pledge|
        pledge.amount
      end
    end

    @all_pledges = @funding_by_reward.flatten

    render :show
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      JSON.parse(params[:project][:rewards]).each do |rewardData|
        reward = Reward.new(rewardData)
        reward.project_id = @project.id
        reward.save
      end

      @creator = @project.creator
      @rewards = @project.rewards.includes(:pledges)
      @funding_by_reward = @rewards.map do |reward|
        reward.pledges.map do |pledge|
          pledge.amount
        end
      end
      @all_pledges = @funding_by_reward.flatten
      render :show
    else
      render json: @project.errors.full_messages, status: 401
    end
  end
  
  def update
    @project = selected_project
    if @project && @project.update_attributes(project_params)
      render :show
    elsif !@project
      render json: ['Could not locate project'], status: 400
    else
      render json: @project.errors.full_messages, status: 401
    end
  end

  def destroy
    @project = selected_project
    if @project
      @project.destroy
      render json: {projectId: @project.id}
    else
      render json: ['Could not locate project'], status: 400
    end
  end
  
  private
  
  def project_params
    params.require(:project).permit(:title, :subtitle, :creator_id, :category, :due_date, :body, :target, :image)
    # params.require(:project).permit(:title, :subtitle, :creator_id, :category, :due_date, :body, :target)
  end

  def selected_project
    Project.find(params[:id])
  end

  def filter_params
    params.require(:filters).permit(:type, :search_term, :page, :limit)
  end

end


