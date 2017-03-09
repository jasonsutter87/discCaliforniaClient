class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.string :course_name
      t.string :player_name
      t.integer :hole_count

      t.integer :course_id
      t.integer :player_id
      t.timestamps
    end
  end
end
