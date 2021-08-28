class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.string :image, default: 'https://thumbs.dreamstime.com/b/pencil-paper-4184006.jpg'

      t.timestamps
    end
  end
end
