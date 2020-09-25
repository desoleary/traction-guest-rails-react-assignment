# frozen_string_literal: true

class AddOrganizationToUsers < ActiveRecord::Migration[6.0]
  def change
    change_table(:users) do |t|
      t.references :organization,
                   index: true, foreign_key: { on_delete: :cascade }
    end
  end
end
