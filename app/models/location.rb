class Location < ApplicationRecord

    validates :lat, presence: true
    validates :lng, presence: true
    validates :name, presence: true

end
