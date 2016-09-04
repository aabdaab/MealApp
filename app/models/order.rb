class Order < ApplicationRecord

  # STATES = ['launched', 'finalized', 'ordered', 'delivered']

  belongs_to :user
  belongs_to :restaurant

  include AASM
  aasm column: 'state' do
    state :launched, initial: true
    state :finalized
    state :ordered
    state :delivered
    event :add_meal do
      transitions :from => :launched, :to => :finalized
    end
    event :order do
      transitions :from => :finalized, :to => :ordered
    end
    event :delivered do
      transitions :from => :ordered, :to => :delivered
    end
  end


end
