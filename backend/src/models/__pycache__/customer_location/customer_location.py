from flask import request, Blueprint , jsonify
from api.application import db,ma
from sqlalchemy.dialects.postgresql import UUID 
from datetime import datetime
import uuid
from customer.customer import Customer

customer_location = Blueprint('customer_location', __name__,
                        template_folder='customer_location')

class Customer_location(db.Model):
    _id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(128), unique=True, nullable=False)
    address = db.Column(db.String(128), unique=True, nullable=False)
    customer_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    active = db.Column(db.Boolean, nullable=False)
    creation_date = db.Column(db.DateTime, unique=True, nullable=False, default=datetime.now())
    modification_date = db.Column(db.DateTime, unique=True, nullable=False, default=datetime.now())

    def __init__(self, id, name, active, creation_date, modification_date):
        self.id = id
        self.name = name
        self.active = active
        self.creation_date = creation_date
        self.modification_date = modification_date

class CustomerLocationSchema(ma.Schema):
  class Meta:
    fields = ('id', 'name', 'active' ,'creation_date', 'modification_date')

customer_location_schema = CustomerLocationSchema()
customer_locations_schema = CustomerLocationSchema(many=True)

#Get All
@customer_location.route('/customer_location/get', methods=['GET'])
def get_customer_locations():
  all_customer_locations = Customer_location.query.all()
  result = customer_location.dump(all_customer_locations)
  return jsonify(result)

#Get by id
@customer_location.route('/customer_location/get/<id>', methods=['GET'])
def get_customer_location(id):
  customer_location = Customer_location.query.get(id)
  return customer_location_schema.jsonify(customer_location)

#Update
@customer_location.route('/customer_location/update/<id>', methods=['PUT'])
def update_customer_location(id):
  customer_location = Customer_location.query.get(id)

  name = request.json['name']
  description = request.json['description']
  price = request.json['price']
  qty = request.json['qty']

  customer_location.name = name
  customer_location.description = description
  customer_location.price = price
  customer_location.qty = qty

  db.session.commit()

  return customer_location_schema.jsonify(customer_location)

#Delete
@customer_location.route('/customer_location/delete/<id>', methods=['DELETE'])
def delete_customer_location(id):
  customer_location = Customer_location.query.get(id)
  db.session.delete(customer_location)
  db.session.commit()

  return customer_location_schema.jsonify(customer_location)

#Add
@customer_location.route('/customer_location/post', methods=['POST'])
def add_customer_location():
  name = request.json['name']
  description = request.json['description']
  price = request.json['price']
  qty = request.json['qty']

  new_customer_location = Customer_location(name, description, price, qty)

  db.session.add(new_customer_location)
  db.session.commit()

  return customer_locations_schema.jsonify(new_customer_location)