class Api::CartItemsController < ApplicationController

    before_action :ensure_logged_in, only: [:index, :update, :destroy]

    #there's no way to check if there is a cart on front end
    #  in the situation of adding to cart from a product page (assuming the
    #  the cart isnt in the state anymore),
    #  if for example you just click add to cart, must make either create
    #  or update have a if else for both situations
    def update
        cart_owner = find_cart_owner(params[:user_id])

        if cart_owner.nil?
            # and return **IS EXTREMELY IMPORTANT** in the case the user doesnt exist (however unlikely)
            render json: ["That user doesn't exist!"], status: 500 and return
        end


        ## Will likely change this to just CartItem.find_by(id: params[:id])
        @cart_product = find_cart_item(cart_owner.id, params[:product_id])

        # if a new cart item
        if @cart_product.nil?
            @cart_product = CartItem.new(cart_item_params)
            if @cart_product.save
                render :show
            else
                render json: @cart_product.errors.full_messages, status: 404
            end
        #if there is already that cart item
        elsif @cart_product
            if @cart_product.update(cart_item_params)
                render :show
            else
                render json: @cart_product.errors.full_messages, status: 404
            end
        end
    end

    #Ill make update modular, since a cart is just "always empty" at first
    #  on the frontend!

    ##In this case, the cart id from the params
    ##  seems to already factor into the .includes for some reason
    
    # @cart = CartItem.includes(:product, :shopper).where('shopper_id = ?', params[:shopper_id])
    # .find throws an error, find_by returns nil
    def index
        cart_owner = find_cart_owner(params[:user_id])

        if cart_owner.nil?
            render json: ["That user doesn't exist!"], status: 404 and return
        end

        #make sure that the includes is a preload and not an eager load!!!
        #preload is way faster, eager_load (in this case) will be much much slower.
        @cart = cart_owner.cart_products.preload(product: :owner)

            # .joins("INNER JOIN products ON cart_items.product_id = products.id")
            # .joins("INNER JOIN users on products.owner_id = users.id")
            # .where("shopper_id = 85")
        # @cart = @user.cart_items.includes(:owner)

        if @cart == []
            render json: []
        elsif @cart
            render :index
        else
            render render json: @cart.errors.full_messages, status: 404
        end

    end
    
    def destroy
        cart_item = find_cart_item(params[:user_id], params[:product_id])
        
        if cart_item.nil?
            render json: ["Something went wrong!"], status: 500
        elsif cart_item.destroy
            render json: {}, status: 202
        else
            render json: cart_item.errors.full_messages, status: 404
        end
    end


    private

    def cart_item_params
        params.require(:cart_item).permit(:shopper_id, :product_id, :quantity)
    end

    def find_cart_owner(user_id)
        user = User.find_by(id: user_id)
        return user
    end

    def find_cart_item(shopper_id, product_id)
        return CartItem.find_by(shopper_id: shopper_id, product_id: product_id)
    end

    def to_partial_path
        '/api/cart_items/cart_item'
    end

end
