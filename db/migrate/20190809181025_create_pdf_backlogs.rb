class CreatePdfBacklogs < ActiveRecord::Migration[5.2]
  def change
    create_table :pdf_backlogs do |t|

      t.timestamps
    end
  end
end
