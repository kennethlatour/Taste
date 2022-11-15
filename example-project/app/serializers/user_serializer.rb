class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username
  has_many :tastes
  has_many :styles
end
