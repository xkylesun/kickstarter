class CreatePledges < ActiveRecord::Migration[5.2]
  def change
    create_table :pledges do |t|
      t.integer :backer_id, null: false
      t.integer :pledge_level_id, null: false
      t.integer :quantity, null: false
      t.timestamps
    end
    add_index :pledges, :backer_id
    add_index :pledges, :pledge_level_id
  end
end
