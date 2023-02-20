from server.src.db import ma


class LocationSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'active', 'creation_date', 'modification_date')


location_schema = LocationSchema()
locations_schema = LocationSchema(many=True)
