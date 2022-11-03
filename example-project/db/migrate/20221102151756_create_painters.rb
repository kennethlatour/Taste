class CreatePainters < ActiveRecord::Migration[6.1]
  def change
    create_table :painters do |t|
      t.integer :style_id
      t.string :painter 
      t.string :img
      t.timestamps
    end
  end
end
