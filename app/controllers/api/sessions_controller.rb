class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ['The email address and password you entered do not match.'], status: 401
        else
            login(@user)
            # @backed_projects = @user.backed_projects
            render :show
        end
    end

    def destroy
        if !current_user
            render json: ["cannot locate user"], status: 404
        else
            logout
            render json: {};
        end
    end


end
