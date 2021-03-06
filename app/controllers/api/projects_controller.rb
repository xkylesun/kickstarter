require 'json'

class Api::ProjectsController < ApplicationController
  def index
    @project = nil;
    search = (filter_params[:search_term] || "").downcase
    limit = filter_params[:limit] || 3
    page = filter_params[:page]

    case filter_params[:type]
    when "category"
      @projects = Project.where(category: search, status: "launched")
        .where("due_date > ?", DateTime.now)
        .order("due_date asc")
        .includes(:creator, :pledges, image_attachment: :blob)
        .page(page).per(limit)

    when "search_term"
      regex = "%#{search}%"
      @projects = Project.where(status: "launched")
        .where("lower(projects.title) like ? or projects.category = ?", regex, search)
        .where("due_date > ?", DateTime.now)
        .distinct.order("due_date asc")
        .includes(:creator, :pledges, image_attachment: :blob)
        .page(page).per(limit)

    when "_home"
      @projects = Project.where(status: "launched").limit(10)
        .where("due_date > ?", DateTime.now)
        .order("due_date asc")
        .includes(:creator, :pledges, image_attachment: :blob)
        
    else
      @projects = Project.where(status: "launched")
        .where("due_date > ?", DateTime.now)
        .order("due_date asc")
        .includes(:creator, :pledges, image_attachment: :blob)
        .page(page).per(limit)
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
    @project = selected_project

    if @project
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
      render json: {project: {}}
    end
  end

  def random
    @project = Project.where(status: "launched").order("RANDOM()").limit(1)[0]
    render json: {id: @project.id}
  end

  def draft 
    @project = Project.find(params[:project_id])
    @rewards = @project.rewards
    render :draft
  end

  def create
    @project = Project.new(project_params)
    @project[:status] = "draft"
    if @project.save
      render json: {project: @project}
    else
      render json: @project.errors.full_messages, status: 401
    end
  end
  
  def update
    @project = selected_project
    if @project
      if @project.creator_id != project_params[:creator_id].to_i
        render json: ["user not authorized"], status: 401
      else

        @project.assign_attributes(project_params)
        @project.status = "launched"

        if @project.save

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
    else
      render json: ['Could not locate project'], status: 400
    end
  end

  def destroy
    @project = selected_project
    project_id = @project.id
    creator_id = @project.creator_id
    if @project
      @project.destroy
      @created_project_ids = User.find(creator_id).created_project_ids
      render json: {projectId: project_id, createdProjectIds: @created_project_ids}
    else
      render json: ['Could not locate project'], status: 400
    end
  end
  
  private
  
  def project_params
    params.require(:project).permit(:title, :subtitle, :creator_id, :category, :due_date, :body, :target, :image)
  end

  def selected_project
    Project.where(id: params[:id]).includes(:creator, :rewards)[0]
  end

  def filter_params
    params.require(:filters).permit(:type, :search_term, :page, :limit)
  end



end


