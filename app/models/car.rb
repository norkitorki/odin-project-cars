class Car < ApplicationRecord
  has_many :variants

  validates :maker, :model, :year, presence: true
end
