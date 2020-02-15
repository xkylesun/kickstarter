json.rewards do
    @rewards.each do |reward|
        json.set! reward.id do
            json.partial! "api/rewards/rewards", reward: reward
        end
    end
end
