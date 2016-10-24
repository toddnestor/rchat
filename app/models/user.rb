class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable

  validates_uniqueness_of    :email,     :case_sensitive => false, :allow_blank => true, :if => :email_changed?, scope: :team_id
  validates_format_of    :email,    :with  => Devise.email_regexp, :allow_blank => true, :if => :email_changed?
  validates_presence_of    :password, :on=>:create
  validates_confirmation_of    :password, :on=>:create
  validates_length_of    :password, :within => Devise.password_length, :allow_blank => true

  validates :username, :fname, :lname, :email, presence: true
  after_initialize :ensure_auth_token

  belongs_to :team
  has_one :role
  has_many :messages
  has_many :participants
  has_many :rooms,
      through: :participants
  has_many :meta, as: :metable

  def ensure_auth_token
    unless self.auth_token
      self.auth_token = SecureRandom::urlsafe_base64
      self.save
    end

    self.auth_token
  end
end
