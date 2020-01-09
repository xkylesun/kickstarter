
json.set! "projects" do 
    json.set! @project.id do
        json.extract! @project, :id, :title, :creator_id, :category, :due_date, :body, :created_at, :thumbnail, :video_link, :target
    end
end

json.set! "users" do
    json.set! @user.id do
        json.extract! @user, :id, :name, :email, :biography
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