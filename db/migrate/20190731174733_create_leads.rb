class CreateLeads < ActiveRecord::Migration[5.2]
  def change
    create_table :leads do |t|
      t.string :nome
      t.string :email
      t.string :empresa
      t.string :telefone

      t.timestamps
    end
  end
end
