from flask import Blueprint, request, jsonify
from datetime import datetime

from server.src.db import db
from .Customer_location import Customer_location
from .Customer_location_view import Customer_location_view
from .customerLocationSchemas import customer_location_schema
from .customerLocationViewSchemas import customer_locations_view_schema, customer_location_view_schema


customer_location = Blueprint(
    'customer_location', __name__, url_prefix='/customer_location')


@customer_location.route('/get', methods=['GET'])
def get_customer_locations():
    all_customer_locations = Customer_location_view.query.all()
    result = customer_locations_view_schema.dump(all_customer_locations)
    return jsonify(result)


@customer_location.route('/get/<id>', methods=['GET'])
def get_customer_location(id):
    customer_location = Customer_location.query.get(id)
    return customer_location_view_schema.jsonify(customer_location)


@customer_location.route('/update/<id>', methods=['PUT'])
def update_customer_location(id):
    customer_location = Customer_location.query.get(id)

    customer_location.active = request.json['active']
    customer_location.name = request.json['name']
    customer_location.address = request.json['address']
    customer_location.customer_id = request.json['customer_id']
    customer_location.modification_date = datetime.now()

    db.session.commit()

    return customer_location_schema.jsonify(customer_location)


@customer_location.route('/delete/<id>', methods=['DELETE'])
def delete_customer_location(id):
    customer_location = Customer_location.query.get(id)
    db.session.delete(customer_location)
    db.session.commit()

    return customer_location_schema.jsonify(customer_location)


@customer_location.route('/post', methods=['POST'])
def add_customer_location():
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    active = request.json['active']
    name = request.json['name']
    address = request.json['address']
    customer_id = request.json['customer_id']
    creation_date = now
    modification_date = now

    new_customer_location = Customer_location(
        active, name, address, customer_id, creation_date, modification_date)

    db.session.add(new_customer_location)
    db.session.commit()

    return customer_location_schema.jsonify(new_customer_location)
