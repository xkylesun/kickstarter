class Api::ProjectsController < ApplicationController

  def create
    @project = Project.new(project_params)
    if @project.save
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
  
  def show
    @project = selected_project
    @pledgelevels = PledgeLevel.where(project_id: @project.id)
  end
  
  def index
    start = 0
    @projects = Project.order("created_at desc").offset(start).limit(6).includes(:creator, :pledges)
    @users = @projects.map {|project| project.creator}
    # @pledges = @projects.map {|project| project.pledges}.flatten

    render :index

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
    params.require(:project).permit(:title, :creator_id, :category, :due_date, :body)
  end

  def selected_project
    Project.find(params[:id])
  end
end


