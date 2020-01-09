
json.set! "projects" do
    @projects.each_with_index do |project, i|
        json.set! project.id do
            json.extract! project, :id, :title, :creator_id, :thumbnail, :due_date, :target
            json.set! "funding", @funding_by_projects[i]
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

