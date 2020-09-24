# frozen_string_literal: true

class CreateVisitorInvites < ActiveRecord::Migration[6.0]
  def change
    create_table :visitor_invites do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.references :organization,
                   index: true, foreign_key: { on_delete: :cascade }
      t.references :sender,
                   null: false, index: true, foreign_key: { to_table: :users }
      t.references :recipient,
                   null: true, index: true, foreign_key: { to_table: :visitors }
      t.datetime :start_at
      t.datetime :end_at
      t.text :notes
      t.string :token, unique: true

      t.timestamps
    end
  end
end
