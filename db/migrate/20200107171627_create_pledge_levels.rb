class CreatePledgeLevels < ActiveRecord::Migration[5.2]
  def change
    create_table :pledge_levels do |t|
      t.integer :project_id, null: false
      t.integer :quantity, null: false
      t.integer :minimum, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.date :delivery_date, null: false
      t.timestamps
    end
    add_index :pledge_levels, :project_id
  end
end
