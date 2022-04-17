class ReactionsController < ApplicationController

    def index
        if params[:user_id]
            user = find_user
            reactions = user.reactions
        else
            reactions = Reaction.all
        end
          render json: reactions, include: :user, status: :ok
    end
    

    def show
        reaction = find_reaction
        render json: reaction, status: :ok
    end

    def create
        user = find_user
        reaction = user.reactions.create!(reaction_params)
        render json: reaction, status: :created
    end

    def destroy
        reaction = find_reaction
        reaction.destroy
        head :no_content
    end


    private
    
    def reaction_params
        params.permit(:id, :content, :location_id, :user_id, :user, :location)
    end

    def find_user
        User.find(session[:user_id])
    end

    def find_reaction
        Reaction.find(params[:id])
    end




end
