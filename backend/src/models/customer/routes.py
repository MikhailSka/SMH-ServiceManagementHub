from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from datetime import datetime

from ...db import db
from .Customer import Customer
from .customerSchemas import customer_schema, customers_schema

customer = Blueprint('customer', __name__, url_prefix='/customer')


@customer.route('/get', methods=['GET'])
@jwt_required()
def get_customers():
    all_customers = Customer.query.all()
    result = customers_schema.dump(all_customers)
    return jsonify(result)


@customer.route('/get/<id>', methods=['GET'])
@jwt_required()
def get_customer(id):
    customer = Customer.query.get(id)
    return customer_schema.jsonify(customer), 200


@customer.route('/post', methods=['POST'])
@jwt_required()
def add_customer():
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    name = request.json['name']
    nip = request.json['nip']
    active = request.json['active']
    creation_date = now
    modification_date = now

    new_customer = Customer(
        name, nip, active, creation_date, modification_date)

    db.session.add(new_customer)
    db.session.commit()

    return customer_schema.jsonify(new_customer), 200


@customer.route('/update/<id>', methods=['PUT'])
@jwt_required()
def update_customer(id):
    customer = Customer.query.get(id)

    customer.name = request.json['name']
    customer.nip = request.json['nip']
    customer.active = request.json['active']
    customer.modification_date = datetime.now()

    db.session.commit()

    return customer_schema.jsonify(customer), 200


@customer.route('/delete/<id>', methods=['DELETE'])
@jwt_required()
def delete_customer(id):
    customer = Customer.query.get(id)
    db.session.delete(customer)
    db.session.commit()

    return customer_schema.jsonify(customer), 200