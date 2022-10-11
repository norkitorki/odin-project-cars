class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :maker
      t.string :model
      t.integer :year

      t.timestamps
    end
  end
end
