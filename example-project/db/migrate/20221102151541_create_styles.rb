class CreateStyles < ActiveRecord::Migration[6.1]
  def change
    create_table :styles do |t|
      t.string :style 
      t.string :descript
      t.string :img
      t.timestamps
    end
  end
end
