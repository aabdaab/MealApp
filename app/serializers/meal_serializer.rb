class MealSerializer < ActiveModel::Serializer
  include MoneyRails::ActionViewExtension

  ## in the db: name, price, restaurant_id

  attributes :id, :name, :restaurant, :price

  def restaurant
    object.restaurant.name
  end

  def price
    object.price
  end

end
