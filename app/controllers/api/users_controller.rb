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
    @user = selected_user
    @backed_projects = Project.joins(:backers).where(pledges: { backer_id: @user.id }).distinct.includes(:creator)
    @creators = @backed_projects.map {|project| project.creator}
    @created_projects = Project.where(creator_id: @user.id)
    render :show
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
    params.require(:user).permit(:email, :name, :password)
  end
end
