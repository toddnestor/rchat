class UpdateMeta < ActiveRecord::Migration[5.0]
  def change
    remove_column :meta, :target_type
    remove_column :meta, :target_id

    change_table :meta do |t|
      t.references :metable, polymorphic: true
    end
  end
end
