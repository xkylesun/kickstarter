
json.set! "projects" do
    @projects.each do |project|
        json.set! project.id do
            json.extract! project, :id, :title, :creator_id, :thumbnail, :due_date
        end
    end
end
json.set! "users" do
    @users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :name
        end
    end
end

