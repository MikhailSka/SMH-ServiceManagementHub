from ...db import ma

class PostSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'user_id', 'content', 'creation_date')


class PostViewSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'user_id', 'user_name', 'image', 'content', 'creation_date')

post_schema = PostSchema()
post_view_schema = PostViewSchema()
posts_view_schema = PostViewSchema(many=True)