# == Schema Information
#
# Table name: pledges
#
#  id             :bigint           not null, primary key
#  backer_id      :integer          not null
#  reward_id      :integer          not null
#  project_id     :integer          not null
#  amount         :integer          not null
#  payment_status :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#


class Pledge < ApplicationRecord
    validates :amount, :payment_status, presence: true
    validates :amount, numericality: {greater_than: 0}
    validate :greater_than_min, :has_quantity, :ensure_valid_project
    validates_uniqueness_of :backer_id, scope: :project_id, message: "has already backed this project"
    after_initialize :ensure_payment_status

    belongs_to :backer, foreign_key: :backer_id, class_name: :User
    belongs_to :project
    belongs_to :reward

    def has_quantity
        if self.reward.quantity
            if self.reward.backers.length >= self.reward.quantity
                errors[:pledge] << "must be on available reward"
            end
        end
    end

    def greater_than_min
        if self.amount < self.reward.minimum
            errors[:pledge] << "must be greater than minimum"
        end
    end

    def ensure_payment_status
        self.payment_status = "unpaid"
    end

    def ensure_valid_project
        if self.project.status != "launched"
            errors[:pledge] << "invalid project"
        end
    end
end
