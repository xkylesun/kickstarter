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
      render json: @pledge.project.id
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
