class Api::SessionsController < ApplicationController
    
    def index
        render json: ['hello!']
    end


    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password]) #i think its id? i def need to ask
        if @user.nil?
            render json: ["User not found!"]    
        elsif @user
            login(@user)
            render "/api/users/show"
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: {}
        else
            render json: ["You're not logged in!"], status: 404
        end
    end


end