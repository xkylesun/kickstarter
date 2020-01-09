class Api::PledgesController < ApplicationController

  def create
    @pledge = Pledge.new(pledge_params)
    if @pledge.save
      render :show
    else
      render json: @pledge.errors.full_messages, status: 401
    end
  end
  
  private
  
  def pledge_params
    params.require(:pledge).permit(:backer_id, :project_id)
  end
end
