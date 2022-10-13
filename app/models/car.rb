class Car < ApplicationRecord
  after_save :destroy_empty_variants

  has_many :variants,
    dependent: :destroy

  validates :maker, :model, :year, 
    presence: true

  accepts_nested_attributes_for :variants, 
    allow_destroy: true,
    reject_if: :all_blank

  private

  def destroy_empty_variants
    variants.select { |v| v.value.empty? }.each(&:destroy)
  end
end
