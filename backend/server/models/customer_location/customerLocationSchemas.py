from server.src.db import ma


class CustomerLocationSchema(ma.Schema):
    class Meta:
        fields = ('id', 'active', 'name', 'address', 'customer_id',
                  'creation_date', 'modification_date')


customer_location_schema = CustomerLocationSchema()
