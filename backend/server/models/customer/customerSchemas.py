from server.src.db import ma


class CustomerSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'active', 'creation_date', 'modification_date')


customer_schema = CustomerSchema()
customers_schema = CustomerSchema(many=True)
