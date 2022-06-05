class CreateUploads < ActiveRecord::Migration[7.0]
  def change
    create_table :uploads do |t|
      t.string :upload

      t.belongs_to :personal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
