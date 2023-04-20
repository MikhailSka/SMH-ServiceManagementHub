from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from datetime import datetime

from ...db import db
from .CustomerLocation import CustomerLocation
from .CustomerLocationView import CustomerLocationView
from .customerLocationSchemas import customer_location_schema, customer_locations_view_schema, customer_location_view_schema

customer_location = Blueprint('customer_location', __name__, url_prefix='/customer_location')

@customer_location.route('/get', methods=['GET'])
@jwt_required()
def get_customer_locations():
    all_customer_locations = CustomerLocationView.query.all()
    result = customer_locations_view_schema.dump(all_customer_locations)
    return jsonify(result)

@customer_location.route('/get/<id>', methods=['GET'])
@jwt_required()
def get_customer_location(id):
    customer_location = CustomerLocation.query.get(id)
    return customer_location_view_schema.jsonify(customer_location), 200

@customer_location.route('/update/<id>', methods=['PUT'])
@jwt_required()
def update_customer_location(id):
    customer_location = CustomerLocation.query.get(id)

    customer_location.active = request.json['active']
    customer_location.name = request.json['name']
    customer_location.address = request.json['address']
    customer_location.customer_id = request.json['customer_id']
    customer_location.modification_date = datetime.now()

    db.session.commit()

    return customer_location_schema.jsonify(customer_location), 200

@customer_location.route('/delete/<id>', methods=['DELETE'])
@jwt_required()
def delete_customer_location(id):
    customer_location = CustomerLocation.query.get(id)
    db.session.delete(customer_location)
    db.session.commit()

    return customer_location_schema.jsonify(customer_location), 200

@customer_location.route('/post', methods=['POST'])
@jwt_required()
def add_customer_location():
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    active = request.json['active']
    name = request.json['name']
    address = request.json['address']
    customer_id = request.json['customer_id']
    creation_date = now
    modification_date = now

    new_customer_location = CustomerLocation(active, name, address, customer_id, creation_date, modification_date)

    db.session.add(new_customer_location)
    db.session.commit()

    return customer_location_schema.jsonify(new_customer_location), 200