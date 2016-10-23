class CreateRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms do |t|
      t.string :name, null: false
      t.references :team, foreign_key: true, index: true
      t.string :direct, null: false, default: 'n'
      t.string :private, null: false, default: 'n'

      t.timestamps
    end
    add_index :rooms, :direct
    add_index :rooms, :private
  end
end
