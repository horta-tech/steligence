class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :allow_ip, :download_handbook]
  skip_before_action :require_admin!, only: [:home, :allow_ip, :download_handbook]
  # skip_before_action :staging_mode, only: [:allow_ip]
  def home
    @lead = Lead.new
  end

  def admin_control_panel
  end

  def download_handbook
    send_file(
    "#{Rails.root}/app/assets/files/Handbook_2018_web.pdf",
    filename: "Handbook_2018_web.pdf",
    type: "application/pdf"
    )
  end

  def allow_ip
    AllowAccess.create!(ip: request.remote_ip)
    redirect_to root_path
  end
end
