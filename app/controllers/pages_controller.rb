class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :allow_ip]
  skip_before_action :require_admin!, only: [:home, :allow_ip]
  # skip_before_action :staging_mode, only: [:allow_ip]
  def home
    @lead = Lead.new
  end

  def admin_control_panel
  end

  def allow_ip
    AllowAccess.create!(ip: request.remote_ip)
    redirect_to root_path
  end
end
