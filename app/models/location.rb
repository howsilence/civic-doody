class Location < ApplicationRecord
    belongs_to :user
    
    validates :lat, presence: true
    validates :lng, presence: true
    validates :name, presence: true

    def LatLng
       return self.lat, self.lng
    end

end
