class CreateLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :logs do |t|
      t.date :log_date
      t.string :cared_for
      t.string :condition
      t.string :description
      t.references :plant, foreign_key: true

      t.timestamps
    end
  end
end
