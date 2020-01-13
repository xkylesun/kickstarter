# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_07_172300) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pledge_levels", force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "quantity"
    t.integer "minimum", null: false
    t.string "title", null: false
    t.string "description", null: false
    t.date "estimated_delivery"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_pledge_levels_on_project_id"
  end

  create_table "pledges", force: :cascade do |t|
    t.integer "backer_id", null: false
    t.integer "pledge_level_id", null: false
    t.integer "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["backer_id"], name: "index_pledges_on_backer_id"
    t.index ["pledge_level_id"], name: "index_pledges_on_pledge_level_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title", null: false
    t.string "subtitle", null: false
    t.integer "creator_id", null: false
    t.string "category", null: false
    t.integer "target", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "due_date", null: false
    t.text "body", null: false
    t.string "image_url"
    t.index ["creator_id", "title"], name: "index_projects_on_creator_id_and_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "biography"
    t.string "avatar"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
