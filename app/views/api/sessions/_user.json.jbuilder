json.extract! user, :name, :id, :biography, :backed_reward_ids, :backed_project_ids, :created_project_ids
json.avatar url_for(user.avatar)