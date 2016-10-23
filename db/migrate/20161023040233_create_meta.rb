class CreateMeta < ActiveRecord::Migration[5.0]
  def change
    create_table :meta do |t|
      t.string :key
      t.text :value
      t.string :target_type
      t.integer :target_id

      t.timestamps
    end
    add_index :meta, :key
    add_index :meta, :target_type
    add_index :meta, :target_id
  end
end
