class User < ApplicationRecord
  has_many :orders, dependent: :destroy

  def as_json(options= {})
    super(options.merge(include: :orders))
  end
end
