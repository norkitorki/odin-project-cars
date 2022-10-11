class Car < ApplicationRecord
  has_many :variants

  validates :maker, :model, :year, presence: true

  accepts_nested_attributes_for :variants, reject_if: :all_blank
end
