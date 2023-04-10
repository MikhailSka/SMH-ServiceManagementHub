from ...db import ma

class OperatorSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'active', 'creation_date', 'modification_date')


operator_schema = OperatorSchema()
operators_schema = OperatorSchema(many=True)
