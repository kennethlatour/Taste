class Style < ApplicationRecord
    has_many :tastes 
    has_many :users, through: :tastes
    
    has_many :painters
end
