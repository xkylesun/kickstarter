class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      # redirect_to api_user_url(@user)
      render "api/sessions/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  def update
    @user = selected_user
    if @user && @user.update_attributes(user_params)
      render "api/sessions/show"
    elsif !@user
      render json: ['Could not locate user'], status: 400
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  def show
    @user = User.where(id: params[:id]).includes(:backed_rewards, :backed_creators, backed_projects: {image_attachment: :blob}, created_projects: {image_attachment: :blob })[0]
    if @user
      @backed_projects = @user.backed_projects
      @created_projects = @user.created_projects
      @creators = @user.backed_creators
      render :show
    else
      render json: {user: {}}
    end
  end
  
  def destroy
    @user = selected_user
    if @user
      @user.destroy
      render :show
    else
      render json: ['Could not locate user'], status: 400
    end
  end
  
  private
  
  def selected_user
    User.find(params[:id])
  end
  
  def user_params
    params.require(:user).permit(:email, :name, :password, :avatar)
  end
end
