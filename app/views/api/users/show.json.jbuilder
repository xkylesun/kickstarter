json.user do
    json.partial! "api/users/user", user: @user
    json.extract! @user, :backed_reward_ids, :backed_project_ids, :created_project_ids
end

json.backed_projects do 
    @backed_projects.each do |project|
        json.set! project.id do 
            json.partial! "api/projects/project", project: project
        end
    end
end

json.created_projects do 
    @created_projects.each do |project|
        json.set! project.id do 
            json.partial! "api/projects/project", project: project
        end
    end
end

json.creators do
    @creators.each do |creator|
        json.set! creator.id do
            json.extract! creator, :id, :name
            json.avatar url_for(creator.avatar) 
        end
    end
end