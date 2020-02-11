


json.extract! @pledge, :id, :backer_id, :amount, :project_id
json.set! "project_title", @project.title
json.set! "reward_title", @reward.title


