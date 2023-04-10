from ...db import ma

class UnitLocationHistoryViewSchema(ma.Schema):
    class Meta:
        fields = ('id', 'description', 'unit_id', 'unit_name', 'location_id', 'location_name',
                  'customer_location_id', 'customer_location_name', 'creation_date')


unit_location_history_view_schema = UnitLocationHistoryViewSchema()
unit_locations_history_view_schema = UnitLocationHistoryViewSchema(many=True)
