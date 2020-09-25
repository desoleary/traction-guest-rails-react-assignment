# frozen_string_literal: true

class CreateVisitors < ActiveRecord::Migration[6.0]
  def change
    create_table :visitors do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.references :organization, index: true, foreign_key: { on_delete: :cascade }
      t.datetime :signed_in_at
      t.datetime :signed_out_at
      t.text :notes

      t.timestamps
    end
  end
end
