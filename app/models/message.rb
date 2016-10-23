class Message < ApplicationRecord
  belongs_to :user
  belongs_to :room
  has_many :meta, as: :metable
end
