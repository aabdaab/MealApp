class RestaurantSerializer < ActiveModel::Serializer

  ## in the db: name, localisation, meals, orders

  attributes :name, :meals, :orders

end
