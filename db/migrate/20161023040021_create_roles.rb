class CreateRoles < ActiveRecord::Migration[5.0]
  def change
    create_table :roles do |t|
      t.string :admin
      t.references :user, foreign_key: true, index: true
      t.references :team, foreign_key: true, index: true

      t.timestamps
    end
  end
end
