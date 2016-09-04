class PlaceOrder
  include Interactor

  def call
    order = Order.find(id)
    # order.status = 'Ordered'
    # order.save
  end
end
