
json.set! "projects" do 
    json.set! @project.id do
        # json.extract! @project, :id, :title, :subtitle, :creator_id, :category, :due_date, :body, :created_at, :image_url, :target, :reward_ids
        json.extract! @project, :id, :title, :subtitle, :creator_id, :category, :due_date, :body, :created_at, :target, :reward_ids
        json.set! "current_funding", @all_pledges.sum
        json.set! "backers_count", @all_pledges.length
        json.image_url url_for(@project.image)
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

            json.set! "funding", @funding_by_reward[i].sum
            json.set! "count", @funding_by_reward[i].count

        end
    end
end