class Api::CartItemsController < ApplicationController

    before_action :ensure_logged_in, only: [:index, :create, :update, :destroy]

    #there's no way to check if there is a cart on front end,
    #  if for example you just click add to cart, must make either create
    #  or update have a if else for both situations
    def create
        @cart = CartItem.new(cart_item_params)
        if @cart.save
            render :index
        else
            render @cart.errors.full_messages, status: 404
        end
    end

    #Ill make update modular, since a cart is just "always empty" at first
    #  on the frontend!
    def update

    end


    ##In this case, the cart id from the params
    ##  seems to already factor into the .includes for some reason
    
    # @cart = CartItem.includes(:product, :shopper).where('shopper_id = ?', params[:shopper_id])
    # .find throws an error, find_by returns nil
    def index
        @user = User.find_by(id: params[:user_id])
        if @user.nil?
            render json: ["That user doesn't exist!"], status: 404
        end

        #make sure that the includes is a preload and not an eager load!!!
        #preload is way faster, eager_load (in this case) will be much much slower.
        @cart = @user.cart_products.preload(product: :owner)
        
            # .joins("INNER JOIN products ON cart_items.product_id = products.id")
            # .joins("INNER JOIN users on products.owner_id = users.id")
            # .where("shopper_id = 85")
        # @cart = @user.cart_items.includes(:owner)

        if @cart == []
            render json: []
        elsif @cart
            render :index
        else
            render @cart.errors.full_messages, status: 404
        end

    end


    private

    def cart_item_params
        params.require(:cart_item).permit(:shopper_id, :product_id, :quantity)
    end

end
