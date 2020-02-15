json.extract! project,  :id, :title, :subtitle, :category, :due_date, :body, :target, :creator_id, :status
json.image_url url_for(project.image)