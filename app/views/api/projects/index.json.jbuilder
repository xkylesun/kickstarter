
json.projects do
    @projects.each_with_index do |project, i|
        json.set! project.id do
            json.partial! "api/projects/project", project: project
            json.funding @funding_by_projects[i]
            # json.image_url url_for(project.image)
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
json.last_page @last_page

