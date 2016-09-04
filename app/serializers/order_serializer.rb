class OrderSerializer < ActiveModel::Serializer

  ## in the db: user_id, restaurant_id, meal_id, state

  attributes :id, :owner, :restaurant_name, :restaurant_id, :state, :meal, :price, :date

  def owner
    "#{object.user.first_name} #{object.user.last_name}"
  end

  def date
    Date.parse(object.updated_at.to_s)
  end

  def restaurant_name
    object.restaurant.name
  end

  def restaurant_id
    object.restaurant.id
  end

  def state
    object.state
  end

  def meal
    Meal.find(object.meal_id).name if object.meal_id
  end

  def price
    if(object.meal_id)
      Meal.find(object.meal_id).price
    else
      0
    end
  end
end
