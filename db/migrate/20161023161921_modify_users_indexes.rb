class ModifyUsersIndexes < ActiveRecord::Migration[5.0]
  def change
    remove_index :users, name: "index_users_on_email"
    add_index :users, [:email, :team_id], unique: true
    add_index :users, [:username, :team_id], unique: true
  end
end
