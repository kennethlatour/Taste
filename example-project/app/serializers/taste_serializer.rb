class TasteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :style_id

  belongs_to :user
  belongs_to :style 
end
