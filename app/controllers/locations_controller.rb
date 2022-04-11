class LocationsController < ApplicationController


    def index
        locations = Location.all
        render json: locations, status: :ok
    end

    def create
        # user = find_user
        # location = user.locations.create!(location_params)
        location = Location.create!(location_params)
        render json: location, status: :created
    end

    def destroy
        location = find_location
        location.destroy
        head :no_content
    end

    private

    def location_params
        params.permit(:id, :name, :lat, :lng)
    end

    # def find_user
    #     User.find(session[:user_id])
    # end

    def find_location
        Location.find(params[:id])
    end


    
end
