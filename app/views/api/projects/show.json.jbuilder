
json.project do 
    json.set! @project.id do
        json.partial! "api/projects/project", project: @project
        json.extract! @project, :created_at, :reward_ids
        json.current_funding @all_pledges.sum
        json.backers_count @all_pledges.length
        # json.image_url url_for(@project.image)
    end
end

json.creator do
    json.set! @creator.id do
        json.partial! "api/users/user", user: @creator
    end
end

json.rewards do
    @rewards.each_with_index do |reward, i|
        json.set! reward.id do
            json.extract! reward, :id, :quantity, :minimum, :title, :description, :estimated_delivery
            json.funding @funding_by_reward[i].sum
            json.count @funding_by_reward[i].count
        end
    end
end