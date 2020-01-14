class Reward < ApplicationRecord
    validates :minimum, :title, :description, presence: true
    validates :minimum, numericality: {greater_than: 0}

    belongs_to :project
    has_many :pledges

    has_many :backers, through: :pledges, source: :backer
end
