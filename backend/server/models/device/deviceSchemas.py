from server.src.db import ma


class DeviceSchema(ma.Schema):
    class Meta:
        fields = ("id", 'name', 'active', 'creation_date', 'modification_date')


device_schema = DeviceSchema()
devices_schema = DeviceSchema(many=True)