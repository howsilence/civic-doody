class Location < ApplicationRecord
    belongs_to :user
    has_many :reactions

    
    validates :lat, presence: true
    validates :lng, presence: true
    validates :name, presence: true

    def LatLng
       return self.lat, self.lng
    end

    def nested_reactions_create
        Reaction.create(content: content, location_id: self, user_id: user.id)
    end

end
