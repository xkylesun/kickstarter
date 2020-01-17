class Api::PledgesController < ApplicationController

  def create
    @pledge = Pledge.new(pledge_params)
    @pledge[:project_id] = Reward.find(pledge_params[:reward_id]).project.id
    if @pledge.save
      render json: @pledge
    else
      render json: @pledge.errors.full_messages, status: 401
    end
  end
  
  private
  
  def pledge_params
    params.require(:pledge).permit(:backer_id, :reward_id, :amount, :project_id)
  end
end
