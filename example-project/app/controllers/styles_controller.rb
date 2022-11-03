class StylesController < ApplicationController
    
    def index
        user = User.find(session[:user_id])
        projects = user.styles
        render json: projects, status: :ok
      end
    
end
