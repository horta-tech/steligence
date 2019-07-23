class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :require_admin!

  private

  def require_admin!
    unless current_user && current_user.admin
      flash[:notice] = "Permissão negada. Favor logar como administrador."
      redirect_to(root_path)
    end
  end
end
