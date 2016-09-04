class AddMealRefToOrders < ActiveRecord::Migration[5.0]
  def change
    add_reference :orders, :meal, foreign_key: true
  end
end
