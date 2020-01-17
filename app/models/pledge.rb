# == Schema Information
#
# Table name: pledges
#
#  id         :bigint           not null, primary key
#  backer_id  :integer          not null
#  reward_id  :integer          not null
#  project_id :integer          not null
#  amount     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class Pledge < ApplicationRecord
    validates :amount, presence: true
    validates :amount, numericality: {greater_than: 0}
    validate :greater_than_min, :has_quantity #need test

    belongs_to :backer, foreign_key: :backer_id, class_name: :User
    belongs_to :project
    belongs_to :reward

    def has_quantity
        unless self.reward.quantity
            if Pledge.where(reward_id: self.reward_id).length >= self.reward.validate_quantity
                errors[:pledge] << "must be on available reward"
            end
        end
    end

    def greater_than_min
        if self.amount < self.reward.minimum
            errors[:pledge] << "must be greater than minimum"
        end
    end
end
