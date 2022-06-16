class PersonalsController < ApplicationController

    # wrap_parameters format: [:json, :xml, :url_encoded_form, :multipart_form]

    def index
        render json: Personal.all
    end

    def show
        user = Personal.find(params[:id])
        render json: user, status: :ok
    end

end
