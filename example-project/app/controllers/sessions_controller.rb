class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:create, :login]
  # skip_before_action :authorized_user

    def create
        user = User.find_by(username:params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def login
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:current_user] = user.id
        render json: user, status: :created
      else
        render json: { error: "Invalid username or password" }, status: :unauthorized
      end
  end

    # def destroy
    #     session.delete :user_id
    #     head :no_content
    # end
    def destroy
      session.delete(:user_id)
      head :no_content 
  end 
    
end
