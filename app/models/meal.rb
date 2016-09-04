class Meal < ApplicationRecord
  validates_presence_of :name, :price, :restaurant

  monetize :price, :as => "price_meal"

  belongs_to :restaurant

end
