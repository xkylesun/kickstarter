json.project do 
    json.partial! "api/projects/project", project: @project
    # json.extract! @project, :id, :title, :subtitle, :category, :due_date, :body, :target, :creator_id, :status
end

json.rewards do
    @rewards.each do |reward|
        json.set! reward.id do
            json.partial! "api/rewards/rewards", reward: reward
        end
    end
end