json.rewards do
    json.extract! @reward, :id, :title, :minimum
end

json.projects do
    json.extract! @project, :id, :title
end