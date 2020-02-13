class Api::PledgesController < ApplicationController

  def create

    project_id = Reward.find(pledge_params[:reward_id]).project_id
    @pledge = Pledge.where(backer_id: pledge_params[:backer_id], project_id: project_id)[0]

    if @pledge
      @pledge.assign_attributes(pledge_params)
    else
      @pledge = Pledge.new(pledge_params)
      @pledge[:project_id] = project_id
    end

    if @pledge.save
      @reward = @pledge.reward
      @project = @pledge.project
      render :show
    else
      render json: @pledge.errors.full_messages, status: 401
    end
  end

  # # merged with create
  # def update
  #   debugger
  #   @pledge = Pledge.find(params[:id])
  # end
  
  def pay
    @pledge = Pledge.find(params[:pledge_id])
    @pledge[:payment_status] = "success"
    if @pledge.save
      backer_id = @pledge.backer.id
      @backed_project_ids = Project.joins(:pledges).where(pledges: { backer_id: backer_id}).pluck(:id)
      @backed_reward_ids = Reward.joins(:pledges).where(pledges: { backer_id: backer_id}).pluck(:id)
      render :update
    else
      render json: [@pledge.errors.full_messages], status: 401
    end
  end

  def show 
    @pledge = Pledge.find(params[:id])
    @reward = @pledge.reward
    @project = @pledge.project
    render :show
  end
  
  private
  
  def pledge_params
    params.require(:pledge).permit(:id, :backer_id, :reward_id, :amount)
  end
end
