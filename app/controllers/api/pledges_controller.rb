class Api::PledgesController < ApplicationController

  def create
    @pledge = Pledge.new(pledge_params)
    @pledge[:project_id] = Reward.find(pledge_params[:reward_id]).project.id
    if @pledge.save
      @reward = @pledge.reward
      @project = @pledge.project
      render :show
    else
      render json: @pledge.errors.full_messages, status: 401
    end
  end
  
  def update
    @pledge = Pledge.find(params[:id])
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
    params.require(:pledge).permit(:id, :backer_id, :reward_id, :amount, :project_id)
  end
end
