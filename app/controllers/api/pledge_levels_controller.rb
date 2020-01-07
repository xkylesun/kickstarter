class Api::PledgeLevelsController < ApplicationController
    
  def create
    @pledge_level = PledgeLevel.new(pledge_level_params)
    if @pledge_level.save
      render :show
    else
      render json: @pledge_level.errors.full_messages, status: 401
    end
  end
  
  def update
    @pledge_level = selected_pledge_level
    if @pledge_level && @pledge_level.update_attributes(pledge_level_params)
      render :show
    elsif !@pledge_level
      render json: ['Could not locate pledge_level'], status: 400
    else
      render json: @pledge_level.errors.full_messages, status: 401
    end
  end
  
  def destroy
    @pledge_level = selected_pledge_level
    if @pledge_level
      @pledge_level.destroy
      render :show
    else
      render json: ['Could not locate pledge_level'], status: 400
    end
  end
  private

  def selected_pledge_level
    PledgeLevel.find(params[:id])
  end
  
  def pledge_level_params
    params.require(:pledge_level).permit(:project_id, :quantity, :rate, :title, :description, :delivery_date)
  end

end
