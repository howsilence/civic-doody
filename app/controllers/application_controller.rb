class ApplicationController < ActionController::API
    include ActionController::Cookies

    
    #CREATES TEST FOLLOW IN CONFIG/ROUTES
    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
      end


end
