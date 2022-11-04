class StylesController < ApplicationController
    
    def index
        user = User.find(session[:user_id])
        projects = user.styles
        render json: projects, status: :ok
      end

      def show 
        style = Style.find(params[:id])
        render json: style, status: :ok
      end
    
end
