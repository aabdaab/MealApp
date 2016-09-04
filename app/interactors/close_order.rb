class CloseOrder
  include Interactor

  :id

  def call
    order = Order.find(id)
    # order.status = 'Delivered'
    # order.save
  end
end
