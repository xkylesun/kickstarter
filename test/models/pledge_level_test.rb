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

require 'test_helper'

class PledgeLevelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
