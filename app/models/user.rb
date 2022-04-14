class User < ApplicationRecord
    has_many :locations, dependent: :destroy
    has_many :reactions
    
    validates :username, presence: true, uniqueness: true
    
    has_secure_password
end
