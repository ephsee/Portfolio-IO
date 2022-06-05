class CreatePersonals < ActiveRecord::Migration[7.0]
  def change
    create_table :personals do |t|
      t.string :first
      t.string :last
      t.string :email
      t.string :linkedin
      t.string :github
      t.string :address
      t.string :number

      t.timestamps
    end
  end
end
