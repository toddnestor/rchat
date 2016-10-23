class Metum < ApplicationRecord
  validates :key, presence: true

  belongs_to :metable, polymorphic: true
end
