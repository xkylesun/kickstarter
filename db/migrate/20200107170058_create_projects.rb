class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :subtitle, null: false
      t.integer :creator_id, null: false
      t.string :category, null: false
      t.integer :target, null: false
      t.timestamps
      t.timestamp :due_date, null: false
      t.text :body, null: false
      t.string :image_url
    end
    add_index :projects, [:creator_id, :title], unique: true
    add_index :projects, :category
  end
end
