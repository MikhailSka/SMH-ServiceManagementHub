from ...db import ma

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'active', 'email', 'admin', 'name',
                  'image', 'creation_date', 'modification_date')

user_schema = UserSchema()
users_schema = UserSchema(many=True)