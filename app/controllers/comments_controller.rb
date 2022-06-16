class CommentsController < ApplicationController
    
    def index
        render json: Comment.all, status: :ok
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created    
    end

    private

    def comment_params
        params.permit(:personal_id, :comment)
    end

end
