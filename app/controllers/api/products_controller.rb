class Api::ProductsController < ApplicationController

    def create
        @product = Product.new(product_params)
        
        if @product.save
            render :show
        else
            render json: @product.errors.full_messages, status: 404
        end
    end

    def show
        @product = Product.find_by(id: params[:id])
        if @product #might have to switch this one around, 
            render :show
        else
            render json: ['Product not found!'], status: 404
        end
    end

    def index
        @products = Product.all
        render :index
    end

    def update
        @product = Product.find_by(id: params[:id])
        if @product
            if @product.update(product_params)
                render :show
            else
                render json: @product.errors.full_messages, status: 404
            end
        else
            render json: ['Product not found!'], status: 404
        end
    end

    # def destroy

    # end


    private
    def product_params
        params.require(:product).permit(:name, :description, :price, :user_id)
    end

end
