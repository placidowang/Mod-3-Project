# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_27_191527) do

  create_table "attachments", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.integer "weight"
    t.integer "change_in_top_speed"
    t.integer "change_in_acceleration"
    t.integer "change_in_handling"
    t.string "img_url"
  end

  create_table "cars", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "weight"
    t.string "make"
    t.string "model"
    t.string "year"
    t.integer "base_top_speed"
    t.integer "base_acceleration"
    t.integer "base_handling"
    t.string "img_url"
  end

  create_table "part_attachment_joiners", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "part_id"
    t.integer "attachment_id"
  end

  create_table "parts", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.integer "car_id"
    t.string "img_url"
  end

end
