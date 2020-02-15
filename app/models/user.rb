# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  biography       :string
#  avatar          :string
#

class User < ApplicationRecord
    validates :name, :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_many :pledges, -> { where(payment_status: "success")}, foreign_key: :backer_id
    has_many :created_projects, foreign_key: :creator_id, class_name: :Project

    has_many :backed_rewards, through: :pledges, source: :reward
    has_many :backed_projects, through: :pledges, source: :project
    has_many :backed_creators, through: :backed_projects, source: :creator

    attr_reader :password

    after_initialize :ensure_session_token, :ensure_avatar

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def ensure_avatar
        self.avatar ||= "https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-2.1.0&w=80&h=80&fit=crop&v=&auto=format&frame=1&q=92&s=d89e3180fafd307918a94a3c9dd79c45"
    end

end

