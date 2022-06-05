# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_05_213627) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "comment"
    t.bigint "personal_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["personal_id"], name: "index_comments_on_personal_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "message"
    t.bigint "personal_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["personal_id"], name: "index_messages_on_personal_id"
  end

  create_table "personals", force: :cascade do |t|
    t.string "first"
    t.string "last"
    t.string "email"
    t.string "linkedin"
    t.string "github"
    t.string "address"
    t.string "number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "uploads", force: :cascade do |t|
    t.string "upload"
    t.bigint "personal_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["personal_id"], name: "index_uploads_on_personal_id"
  end

  add_foreign_key "comments", "personals"
  add_foreign_key "messages", "personals"
  add_foreign_key "uploads", "personals"
end
