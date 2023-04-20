from ...db import ma


class UnitSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'active', 'serial_number', 'product_code', 'device_id',
                  'operator_id', 'description', 'creation_date', 'modification_date')

class UnitViewSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'active', 'serial_number', 'product_code', 'device_id', 'device_name',
                  'operator_id', 'operator_name', 'description', 'creation_date', 'modification_date')

unit_view_schema = UnitViewSchema()
units_view_schema = UnitViewSchema(many=True)

unit_schema = UnitSchema()