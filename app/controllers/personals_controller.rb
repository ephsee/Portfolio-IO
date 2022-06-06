class PersonalsController < ApplicationController

    def index
        render json: Personal.all
    end

    def show
        user = Personal.find(params[:id])
        render json: user, status: :ok
    end

end
