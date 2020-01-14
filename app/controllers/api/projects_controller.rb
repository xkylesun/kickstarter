require 'json'

class Api::ProjectsController < ApplicationController

  
  def index
    start = 0

    @projects = Project.order("created_at desc").offset(start).limit(6).includes(:creator, :pledges)
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
    @creator = @project.creator
    @rewards = @project.rewards.includes(:pledges)
    @funding_by_reward = @rewards.map do |reward|
      reward.pledges.map do |pledge|
        pledge.amount
      end
    end
    @all_pledges = @funding_by_reward.flatten

    render :show
    # render json: @funding_by_reward
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

  end
end


