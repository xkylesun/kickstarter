
json.set! "projects" do 
    json.set! @project.id do
        # json.extract! @project, :id, :title, :subtitle, :creator_id, :category, :due_date, :body, :created_at, :image_url, :target, :pledge_level_ids
        json.extract! @project, :id, :title, :subtitle, :creator_id, :category, :due_date, :body, :created_at, :target, :pledge_level_ids
        json.set! "current_funding", @all_pledges.sum
        json.set! "backers_count", @all_pledges.length
        json.image_url url_for(@project.image)
    end
end

json.set! "creator" do
    json.set! @creator.id do
        json.partial! "api/users/user", user: @creator
    end
end

json.set! "pledge_levels" do
    @pledge_levels.each_with_index do |level, i|
        json.set! level.id do
            json.extract! level, :id, :quantity, :minimum, :title, :description, :estimated_delivery

            json.set! "funding", @funding_by_level[i].sum
            json.set! "count", @funding_by_level[i].count

        end
    end
end