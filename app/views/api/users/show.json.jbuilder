json.partial! "api/users/user", user: @user

json.set! "backed_projects" do 
    @backed_projects.each do |project|
        json.set! project.id do 
            json.extract! project, :id, :title, :creator_id, :thumbnail
        end
    end
end

json.set! "creators" do 
    @creators.each do |creator|
        json.set! creator.id do
            json.extract! creator, :id, :name, :avatar
        end
    end
end