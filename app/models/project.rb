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
    validates :title, :subtitle, :category, :target, :due_date, :body, presence: true, if: -> { :status == "launched" }
    validates :target, numericality: {greater_than: 0}, if: -> { :status == "launched" }
    validate :check_date, if: -> { :status == "launched" }
    validate :ensure_image
    
    belongs_to :creator, foreign_key: :creator_id, class_name: :User

    has_many :rewards, dependent: :destroy
    has_many :pledges, -> { where(payment_status: "success")}
    has_many :backers, through: :pledges, source: :backer
    
    after_commit :create_first_reward, on: :create
    
    has_one_attached :image

    def create_first_reward
        if self.rewards.length == 0
            Reward.new(project_id: Project.last.id, minimum: 1, title: "Back it because you believe in it.", description: "Support the project for no reward, just because it speaks to you.").save
        end
    end

    def ensure_image
     if !self.image.attached?
        self.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'no-image.png')), filename: 'default-image.png', content_type: 'image/png')
     end
    end

    def check_date
        if self.due_date < DateTime.now
            errors[:project] << "launch date must be greater than today"
        end
    end
end
