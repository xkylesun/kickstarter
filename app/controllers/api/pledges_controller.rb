class Api::PledgesController < ApplicationController

  def create
    @pledge = Pledge.new(pledge_params)
    if @pledge.save
      render json: @pledge
    else
      render json: @pledge.errors.full_messages, status: 401
    end
  end
  
  private
  
  def pledge_params
    params.require(:pledge).permit(:backer_id, :pledge_level_id, :amount)
  end
end
