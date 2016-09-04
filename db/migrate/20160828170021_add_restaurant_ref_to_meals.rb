class AddRestaurantRefToMeals < ActiveRecord::Migration[5.0]
  def change
    add_reference :meals, :restaurant, foreign_key: true
  end
end
