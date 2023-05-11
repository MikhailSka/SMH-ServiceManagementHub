from ...db import ma

class LocationSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'active', 'customer_id', 'creation_date', 'modification_date')

class LocationViewSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'active', 'customer_id', 'customer_name', 'creation_date', 'modification_date')


location_schema = LocationSchema()

locations_view_schema = LocationViewSchema(many=True)
location_view_schema = LocationViewSchema()
