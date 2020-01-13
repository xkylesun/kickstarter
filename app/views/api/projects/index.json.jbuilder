
json.projects do
    @projects.each_with_index do |project, i|
        json.set! project.id do
            json.extract! project, :id, :title, :subtitle, :creator_id, :image_url, :due_date, :target
            json.set! "funding", @funding_by_projects[i]
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

