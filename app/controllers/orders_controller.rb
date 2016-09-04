class OrdersController < ApplicationController

  respond_to :html, :json

  skip_before_action :verify_authenticity_token

  def index
    orders = Order.all

    respond_with orders
  end

  def create
    result = AddRestaurantToOrder.call(restaurant_name: params[:restaurant_name], user_id: params[:owner])

    if result.success?
      respond_with Order.create(user: result.user, restaurant: result.restaurant)
    else
      respond_with status: "fail"
    end
  end

  def show
    order = Order.find(params[:id])
    meal = Meal.find(order.meal_id)
    respond_with(order: order, meal: meal)
  end

  def update
    order = Order.find(params[:id])
    if params[:state]
      change_state(order, params[:state])
    end

    if params[:meal]
      set_meal(order, params[:meal])
    end

    respond_with order
  end

  def change_state(order, state)
    order.update_attribute(:state, state)
  end

  def set_meal(order, meal_id)
    order.update_attribute(:meal_id, meal_id)
    order.update_attribute(:state, 'Finalized');
  end

  def add_meal
    order = AddMealToOrder.call(meal_id: params[:order][:meal_id], order_id: params[:id])

    respond_with order
  end

  def order
    result = PlaceOrder.call(id: params[:id])
    respond_with result
  end

  def destroy
    order = Order.find(params[:id])
    respond_with order.destroy
  end

  def delivered
    order = CloseOrder.call(id: params[:id])
    respond_with order
  end

  private
  def order_params
    params.require(:order).permit(:user, :restaurant, :status, :meal)
  end

end
