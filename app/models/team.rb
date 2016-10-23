class Team < ApplicationRecord
  validates :name, :subdomain, presence: true
  validates :subdomain, uniqueness: true
  after_create :create_default_roomss

  has_many :users
  has_many :meta, as: :metable
  has_many :roles
  has_many :admins,
      through: :roles,
      source: :user
  has_many :rooms

  def create_default_roomss
    rooms = [
        'general'
    ]

    rooms.each do |room|
      Room.create(team_id: self.team_id, name: room)
    end
  end
end
