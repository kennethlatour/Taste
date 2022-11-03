class User < ApplicationRecord
    has_many :tastes 
    has_many :styles, through: :tastes
    
    validates :email, uniqueness: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 8, maximum: 24}
    validates :password, confirmation: true

    
    before_save :downcase_email
    has_secure_password


    private

  def downcase_email
    self.email = email.downcase
  end

end