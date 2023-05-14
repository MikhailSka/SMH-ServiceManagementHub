from ...db import ma

class ServiceSchema(ma.Schema):
    class Meta:
        fields = ('id', 'active', 'name', 'serial_number', 'product_code', 'location_id', 'location_name',
                  'customer_name', 'nip', 'device_name', 'operator_name', 'description', 'creation_date', 'modification_date', 'service_date')

services_schema = ServiceSchema(many=True)
