class AddRestaurantToOrder
  include Interactor

  def call
    user = User.find(context.user_id)
    restaurant = Restaurant.find_by_name(context.restaurant_name)

    if(user && restaurant)
      context.user = user
      context.restaurant = restaurant
    else
      context.fail!(message: "add_restaurant_to_order.failure")
    end

  end
end
