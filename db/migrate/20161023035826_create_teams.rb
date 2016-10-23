class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :subdomain, null: false
      t.text :logo

      t.timestamps
    end
    add_index :teams, :subdomain, unique: true
  end
end
