class Team < ApplicationRecord
  validates :name, :subdomain, presence: true

  has_many :users
  has_many :meta, as: :metable
  has_many :roles
  has_many :admins,
      through: :roles,
      source: :user
  has_many :rooms
end
