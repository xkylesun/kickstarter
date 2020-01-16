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

    belongs_to :backer, foreign_key: :backer_id, class_name: :User
    belongs_to :project
    belongs_to :reward
end
