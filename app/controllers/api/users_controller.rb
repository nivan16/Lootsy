class Api::UsersController < ApplicationController
    
    before_action :ensure_logged_in, only: [:destroy]
    before_action :ensure_logged_out, only: [:create]

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def destroy
        @user = User.find_by(id: params[:id])
        if @user && ( @user == current_user )
            logout!
            @user.destroy
            render json: ["Success!"]
        elsif @user != current_user
            render json: ["You don't have permission to delete this user!"], status: 404
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    

    private
    
    def user_params
        params.require(:user).permit(:email, :name, :password)
    end


end
