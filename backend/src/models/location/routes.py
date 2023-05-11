from flask import request, Blueprint, jsonify
from flask_jwt_extended import jwt_required
from datetime import datetime

from .Location import Location
from .LocationView import LocationView
from .locationSchemas import location_schema, location_view_schema, locations_view_schema
from ...db import db

location = Blueprint('location', __name__, url_prefix='/location')

@location.route('/get', methods=['GET'])
@jwt_required()
def get_locations():
    all_locations = LocationView.query.all()
    result = locations_view_schema.dump(all_locations)
    return jsonify(result)

@location.route('/get/<id>', methods=['GET'])
@jwt_required()
def get_location(id):
    location = LocationView.query.get(id)
    return location_view_schema.jsonify(location), 200

@location.route('/post', methods=['POST'])
@jwt_required()
def add_location():
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    name = request.json['name']
    active = request.json['active']
    customer_id = request.json['customer_id']
    creation_date = now
    modification_date = now

    new_location = Location( active,name,customer_id, creation_date, modification_date)

    db.session.add(new_location)
    db.session.commit()

    return location_schema.jsonify(new_location), 200

@location.route('/update/<id>', methods=['PUT'])
@jwt_required()
def update_location(id):
    location = Location.query.get(id)

    location.name = request.json['name']
    location.active = request.json['active']
    location.customer_id = request.json['customer_id']
    location.modification_date = datetime.now()

    db.session.commit()

    return location_schema.jsonify(location), 200

@location.route('/delete/<id>', methods=['DELETE'])
@jwt_required()
def delete_location(id):
    location = Location.query.get(id)
    db.session.delete(location)
    db.session.commit()

    return location_schema.jsonify(location), 200