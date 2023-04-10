from ...db import ma


class CustomerLocationViewSchema(ma.Schema):
    class Meta:
        fields = ('id', 'active', 'name', 'address', 'customer_id', 'customer_name'
                  'creation_date', 'modification_date')


customer_location_view_schema= CustomerLocationViewSchema()
customer_locations_view_schema = CustomerLocationViewSchema(many=True)
