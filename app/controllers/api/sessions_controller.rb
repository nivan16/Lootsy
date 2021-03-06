class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password]) #i think its id? i def need to ask
        if @user.nil? #no user matches email given
            render json: {email: "Email address is invalid."}, status: 404
        elsif @user
            login(@user)
            render "/api/users/show"
        else
            render json: {password: "Password was incorrect"}, status: 404
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