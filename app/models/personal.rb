class Personal < ApplicationRecord
    has_many :comments
    has_many :messages
    has_many :uploads
end
