from server.src.db import ma


class UserLocationSchema(ma.Schema):
    class Meta:
        fields = ('id', 'description', 'unit_id', 'location_name_id',
                  'customer_location_id', 'creation_date', 'modification_date')


unit_location_schema = UserLocationSchema()
