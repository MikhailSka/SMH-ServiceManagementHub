from ...db import ma


class CustomerLocationSchema(ma.Schema):
    class Meta:
        fields = ('id', 'active', 'name', 'address', 'customer_id',
                  'creation_date', 'modification_date')

class CustomerLocationViewSchema(ma.Schema):
    class Meta:
        fields = ('id', 'active', 'name', 'address', 'customer_id', 'customer_name'
                  'creation_date', 'modification_date')


customer_location_view_schema= CustomerLocationViewSchema()
customer_locations_view_schema = CustomerLocationViewSchema(many=True)

customer_location_schema = CustomerLocationSchema()
