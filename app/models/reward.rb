# == Schema Information
#
# Table name: rewards
#
#  id                 :bigint           not null, primary key
#  project_id         :integer          not null
#  quantity           :integer
#  minimum            :integer          not null
#  title              :string           not null
#  description        :string           not null
#  estimated_delivery :date
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Reward < ApplicationRecord
    validates :minimum, :title, :description, presence: true
    validates :minimum, numericality: {greater_than: 0}

    belongs_to :project
    has_many :pledges, -> { where(payment_status: "success")}, dependent: :destroy

    has_many :backers, through: :pledges, source: :backer
end
