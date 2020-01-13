# == Schema Information
#
# Table name: projects
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  subtitle   :string           not null
#  creator_id :integer          not null
#  category   :string           not null
#  target     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  due_date   :datetime         not null
#  body       :text             not null
#  image_url  :string
#


class Project < ApplicationRecord
    validates :title, :subtitle, :category, :due_date, :body, presence: true

    belongs_to :creator, foreign_key: :creator_id, class_name: :User

    has_many :pledge_levels, dependent: :destroy
    has_many :pledges, through: :pledge_levels, source: :pledges
    has_many :backers, through: :pledges, source: :backer

    after_commit :create_first_pledge_level

    has_one_attached :image

    def create_first_pledge_level
        PledgeLevel.new(project_id: Project.last.id, minimum: 1, title: "Back it because you believe in it.", description: "Support the project for no reward, just because it speaks to you.").save
    end

    def ensure_image 
        unless self.image.attached?
            errors[:image] << "must be attached"
        end
    end
end
