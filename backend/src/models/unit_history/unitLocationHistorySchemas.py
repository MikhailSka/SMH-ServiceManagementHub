from ...db import ma


class UnitHistoryViewSchema(ma.Schema):
    class Meta:
        fields = ('id', 'unit_id', 'location_id',
                  'user_id', 'creation_date')

class UnitHistoryViewSchema(ma.Schema):
    class Meta:
        fields = ('id', 'unit_id', 'unit_name', 'location_id', 'location_name',
                  'user_id', 'user_name', 'creation_date')


unit_history_view_schema = UnitHistoryViewSchema()
unit_history_view_schema = UnitHistoryViewSchema(many=True)

unit_history_schema = UnitHistoryViewSchema()
