class CreateReactions < ActiveRecord::Migration[6.1]
  def change
    create_table :reactions do |t|
      t.string :content
      t.belongs_to :user
      t.belongs_to :location
      t.timestamps
    end
  end
end
