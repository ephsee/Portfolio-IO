class CommentSerializer < ActiveModel::Serializer
    attributes :comment, :id, :personal_id
end