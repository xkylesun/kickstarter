class Api::RewardsController < ApplicationController
    def show
        @reward = Reward.find(params[:id])
        @project = @reward.project
        render :show
    end
end
