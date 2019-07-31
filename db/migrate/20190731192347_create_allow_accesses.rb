class CreateAllowAccesses < ActiveRecord::Migration[5.2]
  def change
    create_table :allow_accesses do |t|
      t.string :ip

      t.timestamps
    end
  end
end
