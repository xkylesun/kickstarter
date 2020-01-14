class CreatePledges < ActiveRecord::Migration[5.2]
  def change
    create_table :pledges do |t|
      t.integer :backer_id, null: false
      t.integer :reward_id, null: false
      t.integer :amount, null: false
      t.timestamps
    end
    add_index :pledges, :backer_id
    add_index :pledges, :reward_id
  end
end
