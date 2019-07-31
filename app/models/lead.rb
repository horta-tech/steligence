class Lead < ApplicationRecord
  validates :email, presence: true

  require 'csv'

  def self.to_csv
    attributes = %w{Nome Email Telefone Empresa Data}

    CSV.generate(headers: true) do |csv|
      csv << attributes

      self.all.each do |lead|
        csv << [lead.nome, lead.email, lead.telefone, lead.empresa, lead.created_at.strftime("%Y-%m-%d %H:%M:%S")]
      end
    end
  end
end
