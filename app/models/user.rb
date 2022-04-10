class User < ApplicationRecord
    has_many :locations
    
    validates :username, presence: true, uniqueness: true
    
    has_secure_password
end
