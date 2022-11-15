class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized
  # before_action :authorized_user
  # skip_before_action :authorized_user, only: [:current_user]

  # def current_user 
  #   User.find_by(id:session[:current_user])
  # end 
  def current_user
    user = User.find_by(id: session[:user_id])
    user
end 

 
  def authorized 
    render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :current_user
  end

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end
end
