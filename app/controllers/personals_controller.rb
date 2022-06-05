class PersonalsController < ApplicationController

    def index
        render json: Personal.all
    end

end
