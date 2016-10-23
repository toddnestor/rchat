class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :text, null: false
      t.references :user, foreign_key: true, index: true
      t.references :room, foreign_key: true, index: true

      t.timestamps
    end
  end
end
