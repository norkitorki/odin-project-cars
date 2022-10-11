class RenameVariantsTypeToValue < ActiveRecord::Migration[7.0]
  def change
    rename_column :variants, :type, :value
  end
end
