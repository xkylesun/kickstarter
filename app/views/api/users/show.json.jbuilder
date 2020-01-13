json.user do
    json.extract! @user, :name, :id, :avatar, :biography
    json.set! "backed_project_ids", @backed_project_ids
end

json.backed_projects do 
    @backed_projects.each do |project|
        json.set! project.id do 
            json.extract! project, :id, :title, :creator_id, :image_url
        end
    end
end

json.creators do
    @creators.each do |creator|
        json.set! creator.id do
            json.extract! creator, :id, :name, :avatar
        end
    end
end