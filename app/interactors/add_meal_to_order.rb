class AddMealToOrder
  include Interactor

  :meal_id
  :order_id

  def call
    order = Order.find(order_id)
    order.meal_id = meal_id
    # order.state = 'Finalized'
    order.save
  end
end
