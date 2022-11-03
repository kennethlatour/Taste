class Style < ApplicationRecord
    has_many :tastes 
    has_many :users, through: :tastes
end
