
json.project do 
    json.set! @project.id do
        # json.extract! @project, :id, :title, :subtitle, :creator_id, :category, :due_date, :body, :created_at, :image_url, :target, :reward_ids
        json.extract! @project, :id, :title, :subtitle, :creator_id, :category, :due_date, :body, :created_at, :target, :reward_ids
        json.current_funding @all_pledges.sum
        json.backers_count @all_pledges.length
        json.image_url (@project.image.attached? ? url_for(@project.image) : "https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png")
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