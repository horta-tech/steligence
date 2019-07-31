class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :require_admin!, unless: :devise_controller?

  private

  def require_admin!
    unless current_user && current_user.admin?
      flash[:notice] = "Permissão negada. Favor logar como administrador."
      current_user ? redirect_to(root_path) : redirect_to(new_user_session_path)
    end
  end
end
