from ...db import ma


class UnitLocationHistoryViewSchema(ma.Schema):
    class Meta:
        fields = ('id', 'description', 'unit_id', 'location_id',
                  'customer_location_id', 'creation_date')


unit_location_history_schema = UnitLocationHistoryViewSchema()
