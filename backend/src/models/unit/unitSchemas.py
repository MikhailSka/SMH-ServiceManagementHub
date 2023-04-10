from ...db import ma


class UnitSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'active', 'serial_number', 'product_code', 'device_id',
                  'operator_id', 'description', 'creation_date', 'modification_date')


unit_schema = UnitSchema()