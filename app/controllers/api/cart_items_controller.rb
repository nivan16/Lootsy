class Api::CartItemsController < ApplicationController

    before_action :ensure_logged_in, only: [:index, :update, :destroy]

    ##In this case, the cart id from the params
    ##  seems to already factor into the .includes for some reason
    
    # @cart = CartItem.includes(:product, :shopper).where('shopper_id = ?', params[:user_id])
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

        # Might change the response object to an Object {}
        if @cart == []
            render json: []
        elsif @cart
            render :index
        else
            render json: @cart.errors.full_messages, status: 404
        end

    end

    #there's no way to check if there is a cart on front end
    #  in the situation of adding to cart from a product page (assuming the
    #  the cart isnt in the state anymore),
    #  if for example you just click add to cart, must make either create
    #  or update have a if else for both situations
    def update
        cart_owner = find_cart_owner(params[:shopperId])
        if cart_owner.nil?
            # and return **IS EXTREMELY IMPORTANT** in the case the user doesnt exist (however unlikely)
            render json: ["That user doesn't exist! and not formatting"], status: 500 and return
        end


        ## Will likely change this to just CartItem.find_by(id: params[:id])
        @cart_item = find_cart_item(cart_owner.id, params[:productId])

        # if a new cart item
        if @cart_item.nil?
            @cart_item = CartItem.new(shopper_id: cart_owner.id, product_id: params[:productId], quantity: params[:quantity].to_i)
            if @cart_item.save
                render :show
            else
                render json: @cart_item.errors.full_messages, status: 404
            end
        #if there is already that cart item
        elsif @cart_item
            if @cart_item.update(quantity: params[:quantity].to_i)
                render :show
            else
                render json: @cart_item.errors.full_messages, status: 404
            end
        end
    end

    #Ill make update modular, since a cart is just "always empty" at first
    #  on the frontend!
    
    def destroy
        cart_item = find_cart_item(params[:shopperId], params[:productId])
        
        if cart_item.nil?
            render json: ["Something went wrong!"], status: 500
        elsif cart_item.destroy
            render json: {}, status: 202
        else
            render json: cart_item.errors.full_messages, status: 404
        end
    end


    #Unsure of use, consider removal in future (since rails associations already
    # handle user deletion and related products)
    def destroy_cart
        user = find_cart_owner(params[:shopperId])
        
        if user.nil?
            render json: ["User not found!"], status: 404
        else
            cart = CartItem.where(shopper_id: user.id)
            if cart.destroy_all
                render json: {}, status: 202
            else
                render json: cart.errors.full_messages, status: 404
            end
        end
    end

    private

    def find_cart_owner(shopper_id)
        User.find_by(id: shopper_id)        
    end

    def find_cart_item(shopper_id, product_id)
        CartItem.find_by(shopper_id: shopper_id, product_id: product_id)
    end

    def to_partial_path
        '/api/cart_items/cart_item'
    end

end
