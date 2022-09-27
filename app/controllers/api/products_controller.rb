class Api::ProductsController < ApplicationController

    before_action :ensure_logged_in, only: [:create, :update, :destroy]

    def create
        @product = Product.new(product_params)
        
        if @product.save
            render :show
        else
            render json: @product.errors.full_messages, status: 404
        end
    end

    def show
        # The reason flat_map is used to gather the products association of user_reviews
        #   is because the reviews are not guarenteed to exist, and may return a CollectionProxy
        #   that includes empty arrays. flat_map ensures the result will remain an ActiveRecord
        #   Relation.

        @product = Product.where(id: params[:id]).preload(:owner, user_reviews: :reviewer).first
        if @product.nil?
            render json: ['Product not found!'], status: 404
        else
            @reviews = @product.user_reviews
            # @reviewers = @reviews.map(&:reviewer) unless @reviews.first.nil?
            render :show
        end
    end

    def index
        # Note: Using .where() allows me to use the associations regardless
        #   of the products having a review or not. However, it increases
        #   the render time of the views greatly, so there should be quick checks
        #   of *if @reviews.first.nil check* or *if @products.first.nil check*
        if params.has_key?(:category)
            @products = Product.where(category: params[:category]).preload(:owner, user_reviews: :reviewer)

            if @products.first.nil?
                #reduces render time if no products are found
                render json: ["Products not found!"], status: 404
            else
                @reviews = @products.flat_map(&:user_reviews)
                # @reviewers = @reviews.map(&:reviewer)

                render :index
            end
            # .where("name ILIKE (?)", "%#{ Product.sanitize_query_param(params[:query]) }%")
        elsif params.has_key?(:query)
            @products = Product
                .where("name ILIKE (?)", "%#{ Product.sanitize_query_param(params[:query]) }%")
                .preload(:owner, user_reviews: :reviewer)
            # byebug
            if @products
                # @products.preload(:owner, user_reviews: :reviewer)
                # @reviews = @products.flat_map(&:user_reviews)
                @reviews = {}
                @products.each do |product|
                    if !product.user_reviews.first.nil?
                        @reviews[product.id] = product.user_reviews
                    end  
                end
                render :index
            else
                #reduces render time if no products are found
                render json: ["Products not found!"], status: 404
            end

        else
            @products = Product.all
            # @reviews = @products.flat_map(&:user_reviews)
            @reviews = {}
            @products.each do |product|
              if !product.user_reviews.first.nil?
                @reviews[product.id] = product.user_reviews
              end  
            end

            render :index
        end

        # The reason flat_map is used to gather the products association of user_reviews
        #   is because the reviews are not gaurenteed to exist, and may return a CollectionProxy
        #   that includes empty arrays. flat_map ensures the result will remain an ActiveRecord
        #   Relation.

        # @reviews = @products.flat_map(&:user_reviews)
        # @reviewers = @reviews.map(&:reviewer)
    end

    def update
        #should i just check if current_user[:id] == product[:owner_id]
        @product = Product.find_by(id: params[:id])
        if @product # && (current_user[:id] == @product[:owner_id])
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
        params.require(:product).permit(:name, :category, :description, :price, :owner_id)
    end

end
