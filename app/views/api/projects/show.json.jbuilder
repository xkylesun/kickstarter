
json.set! "projects" do 
    json.set! @project.id do
        json.extract! @project, :id, :title, :creator_id, :category, :due_date, :body, :created_at, :thumbnail, :video_link, :target, :pledge_level_ids
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
            json.extract! level, :id, :quantity, :minimum, :title, :description, :delivery_date
            json.set! "funding", @funding_by_level[i].sum
            json.set! "count", @funding_by_level[i].count
        end
    end
end