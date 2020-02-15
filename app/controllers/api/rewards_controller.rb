class Api::RewardsController < ApplicationController
    def create
        reward = Reward.new(reward_params)
        if reward.save
            @rewards = Project.find(reward.project_id).rewards
            render :index
        else
            render json: reward.errors.full_messages, status: 401
        end
    end

    def destroy
        reward = Reward.find(params[:id])
        project_id = reward.project_id
        if reward
            reward.destroy
            @rewards = Project.find(project_id).rewards
            render :index
        else
            render json: ["Could not locate reward"], status: 400
        end
    end

    private

    def reward_params
        params.require("reward").permit(:project_id, :title, :description, :minimum, :quantity, :estimated_delivery)
    end
end
