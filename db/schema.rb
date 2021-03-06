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

ActiveRecord::Schema.define(version: 2020_01_13_172844) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "pledges", force: :cascade do |t|
    t.integer "backer_id", null: false
    t.integer "reward_id", null: false
    t.integer "project_id", null: false
    t.integer "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "payment_status", null: false
    t.index ["backer_id", "project_id"], name: "index_pledges_on_backer_id_and_project_id", unique: true
    t.index ["reward_id"], name: "index_pledges_on_reward_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title", null: false
    t.string "subtitle", null: false
    t.integer "creator_id", null: false
    t.string "category", null: false
    t.integer "target", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "due_date", null: false
    t.text "body", null: false
    t.string "status", null: false
    t.index ["category"], name: "index_projects_on_category"
    t.index ["creator_id", "title"], name: "index_projects_on_creator_id_and_title"
  end

  create_table "rewards", force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "quantity"
    t.integer "minimum", null: false
    t.string "title", null: false
    t.string "description", null: false
    t.string "estimated_delivery"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_rewards_on_project_id"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
