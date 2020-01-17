
json.projects do
    @projects.each_with_index do |project, i|
        json.set! project.id do
            json.extract! project, :id, :title, :subtitle, :creator_id, :due_date, :target, :category
            json.funding @funding_by_projects[i]
            json.image_url url_for(project.image)
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
json.last_page @last_page

