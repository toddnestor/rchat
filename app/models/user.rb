class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :username, :fname, :lname, :email, presence: true

  belongs_to :team
  has_one :role
  has_many :messages
  has_many :participants
  has_many :rooms,
      through: :participants
  has_many :meta, as: :metable
end
