class Api::CartsController < ApplicationController

    def create
        @cart = Cart.new(cart_params)
        if @cart.save
            render :show
        else
            render @cart.errors.full_messages, status: 404
        end
    end

    ##In this case, the cart id from the params
    ##  seems to already factor into the .includes for some reason
    def show
        @cart = Cart.includes(:product, :user).where('user_id = ?', params[:user_id])
        if @cart
            render :show
        else
            render @cart.errors.full_messages, status: 404
        end

    end


    private

    def cart_params
        params.require(:cart).permit(:user_id, :product_id, :quantity)
    end

end
