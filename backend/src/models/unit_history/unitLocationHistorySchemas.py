from ...db import ma


class UnitHistorySchema(ma.Schema):
    class Meta:
        fields = ('id', 'unit_id', 'location_id',
                  'user_id','description','service_date', 'creation_date')

class UnitHistoryViewSchema(ma.Schema):
    class Meta:
        fields = ('id', 'unit_id', 'unit_name', 'location_id', 'location_name',
                  'user_id', 'user_name','description','service_date', 'creation_date')


unit_histories_view_schema = UnitHistoryViewSchema(many=True)

unit_history_schema = UnitHistorySchema()
