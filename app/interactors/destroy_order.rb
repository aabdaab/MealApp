class DestroyOrder
  include Interactor

  def call
    order = Order.find(id)
    order.destroy
  end
end
