class PersonalSerializer < ActiveModel::Serializer
    attributes :first, :last, :email, :linkedin, :github, :address, :number, :id
    has_many :comments
    has_many :messages
    has_many :uploads
end