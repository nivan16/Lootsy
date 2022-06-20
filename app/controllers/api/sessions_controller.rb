class Api::SessionsController < ApplicationController
    
    def index
        render json: ['hello!']
    end


    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password]) #i think its id? i def need to ask
        if @user
            login(@user)
            render json: ['Successful Login!'] #maybe just redirect? or should i create a similar user show jbuilder for session create
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