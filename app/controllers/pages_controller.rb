class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]
  skip_before_action :require_admin!, only: [:home]
  def home
  end

  def admin_control_panel
  end
end
