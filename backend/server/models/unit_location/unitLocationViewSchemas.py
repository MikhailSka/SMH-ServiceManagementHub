from server.src.db import ma


class UserLocationViewSchema(ma.Schema):
    class Meta:
        fields = ('id', 'description', 'unit_id', 'unit_name', 'location_name_id', 'location_name',
                  'customer_location_id', 'customer_location_name', 'creation_date', 'modification_date')


unit_location_view_schema = UserLocationViewSchema()
unit_locations_view_schema = UserLocationViewSchema(many=True)
