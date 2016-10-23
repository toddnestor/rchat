class Room < ApplicationRecord
  validates :name, :team, presence: true

  belongs_to :team
  has_many :participants
  has_many :users,
      through: :participants
  has_many :messages
  has_many :meta, as: :metable
end
