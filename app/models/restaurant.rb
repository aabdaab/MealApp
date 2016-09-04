class Restaurant < ApplicationRecord
  validates_presence_of :name
  validates :name, length: { maximum: 80 }

  has_many :meals, dependent: :destroy
  has_many :orders, dependent: :destroy

  # def as_json(options= {})
  #   super(options.merge(include: :meals))
  #   super(options.merge(include: :orders))
  # end
end
