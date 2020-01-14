class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.integer :quantity
      t.integer :minimum, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.date :estimated_delivery
      t.timestamps
    end
    add_index :rewards, :project_id
  end
end
