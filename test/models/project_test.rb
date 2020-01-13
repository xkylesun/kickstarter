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

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
