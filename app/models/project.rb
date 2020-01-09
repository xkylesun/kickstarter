# == Schema Information
#
# Table name: projects
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  creator_id :integer          not null
#  category   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  due_date   :datetime         not null
#  body       :text             not null
#  thumbnail  :string
#  video_link :string
#
# tested success 1/7/2020


class Project < ApplicationRecord
    validates :title, :category, :due_date, :body, presence: true

    belongs_to :creator, foreign_key: :creator_id, class_name: :User

    has_many :pledge_levels, dependent: :destroy
    has_many :pledges, through: :pledge_levels, source: :pledges
    has_many :backers, through: :pledges, source: :backer
end
