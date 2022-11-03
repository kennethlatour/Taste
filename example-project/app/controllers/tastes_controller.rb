class TastesController < ApplicationController
 
    def show
        user_project = find_user_project
        render json: user_project, include: :user, status: :ok
    end

    private

    def user_project_params
        params.permit(:user_id, :project_id)
    end

    def find_user_project
        UserProject.find(params[:id])
    end
end
