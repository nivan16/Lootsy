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
        # might change nil to "all", depending on frontend development
        if params[:category] == nil
            @products = Product.all
            render :index
        else
            @products = Product
                .select(:id, :name, :category, :description, :price, :user_id)
                .where(category: params[:category])
            render :index
        end
    end

    def update
        #should i just check if current_user[:id] == product[:user_id]
        @product = Product.find_by(id: params[:id])
        if @product # && (current_user[:id] == @product[:user_id])
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
        params.require(:product).permit(:name, :category, :description, :price, :user_id)
    end

end
