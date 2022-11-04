class TastesController < ApplicationController
   
    def index
        user = User.find(session[:user_id])
        projects = user.tastes
        render json: projects, status: :ok
      end

    def show
        user_project = find_user_project
        render json: user_project, include: :user, status: :ok
    end

    def destroy
        user_project = find_user_project
        user_project.destroy
        head :no_content
    end

    def create 
        taste = Taste.create!(user_project_params)
        render json: taste, status: :created 
    end

    private

    # def tasteParams 
    #     params.permit(:user_id, style_id:)
    # end 

    def user_project_params
        params.permit(:user_id, :style_id)
    end

    def find_user_project
        Taste.find(params[:id])
    end
end
