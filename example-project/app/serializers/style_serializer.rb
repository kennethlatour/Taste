class StyleSerializer < ActiveModel::Serializer
  attributes :id, :style, :img, :descript 

  has_many :painters



end
