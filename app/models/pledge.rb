# == Schema Information
#
# Table name: pledges
#
#  id              :bigint           not null, primary key
#  backer_id       :integer          not null
#  pledge_level_id :integer          not null
#  quantity        :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Pledge < ApplicationRecord
    validates :quantity, presence: true
    validates :quantity, numericality: {greater_than: 0}

    belongs_to :backer, foreign_key: :backer_id, class_name: :user
    belongs_to :pledge_level

    has_one :project, through: :pledge_level, source: :project
end
