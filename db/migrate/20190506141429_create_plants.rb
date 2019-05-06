class CreatePlants < ActiveRecord::Migration[5.2]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :description
      t.string :size
      t.string :light
      t.string :water
      t.string :humidity
      t.string :image
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
