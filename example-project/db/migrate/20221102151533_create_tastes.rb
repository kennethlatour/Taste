class CreateTastes < ActiveRecord::Migration[6.1]
  def change
    create_table :tastes do |t|
      t.integer :user_id
      t.integer :style_id
      t.timestamps
    end
  end
end
