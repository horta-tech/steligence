class LeadsController < ApplicationController
  skip_before_action :authenticate_user!, except: [:index]
  skip_before_action :require_admin!, except: [:index]

  def index
    @leads = Lead.all
    respond_to do |format|
      format.html
      format.csv { send_data Lead.to_csv }
      format.xls
      format.xlsx
    end
  end

  def create
    @lead = Lead.new(lead_params)
    if @lead.save
      flash['notice'] = "Obrigado! Entraremos em contato com você em breve!"
      # AdminMailer.contact(@lead.id).deliver_later
      redirect_to root_path
    else
      render 'pages/home', anchor: "contato"
    end
  end

  # def coupon_lead
  #   @lead = Lead.new(lead_params)
  #   respond_to do |format|
  #     if @lead.save
  #       session[:hide_modal] = true
  #       format.js { }
  #     else
  #       format.js { }
  #     end
  #   end
  # end

  private

  def lead_params
    params.require(:lead).permit(:nome, :empresa, :email, :telefone)
  end
end
