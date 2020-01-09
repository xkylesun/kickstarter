# == Schema Information
#
# Table name: pledge_levels
#
#  id            :bigint           not null, primary key
#  project_id    :integer          not null
#  quantity      :integer          not null
#  rate          :integer          not null
#  title         :string           not null
#  description   :string           not null
#  delivery_date :date             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# tested success 1/7/2020

class PledgeLevel < ApplicationRecord
    validates :minimum, :title, :description, :delivery_date, presence: true
    validates :quantity, :minimum, numericality: {greater_than: 0}

    belongs_to :project
    has_many :pledges

    has_many :backers, through: :pledges, source: :backer
end
