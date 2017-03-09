class CreateHoles < ActiveRecord::Migration[5.0]
  def change
    create_table :holes do |t|
      t.string :placement
      t.integer :distance
      t.integer :par
      t.integer :stroke_count
      t.integer :card_id
      t.timestamps
    end
  end
end
