from flask import request, Blueprint, jsonify
from flask_jwt_extended import jwt_required
from datetime import datetime

from ...db import db
from .UnitLocation import UnitLocation
from .UnitLocationView import UnitLocationView
from .unitLocationSchemas import unit_location_schema, unit_locations_view_schema, unit_location_view_schema

unit_location = Blueprint('user_location', __name__,
                          url_prefix='/user_location')

@unit_location.route('/get', methods=['GET'])
@jwt_required()
def get_user_locations():
    all_user_locations = UnitLocationView.query.all()
    result = unit_locations_view_schema.dump(all_user_locations)
    return jsonify(result)

@unit_location.route('/get/<id>', methods=['GET'])
@jwt_required()
def get_user_location(id):
    user_location = UnitLocationView.query.get(id)
    return unit_location_view_schema.jsonify(user_location), 200

@unit_location.route('/update/<id>', methods=['PUT'])
@jwt_required()
def update_user_location(id):
    user_location = UnitLocation.query.get(id)

    user_location.description = request.json['description']
    user_location.unit_id = request.json['unit_id']
    user_location.location_name_id = request.json['location_name_id']
    user_location.customer_location_id = request.json['customer_location_id']
    user_location.modification_date = datetime.now()

    db.session.commit()

    return unit_location_schema.jsonify(user_location), 200

@unit_location.route('/delete/<id>', methods=['DELETE'])
@jwt_required()
def delete_user_location(id):
    user_location = UnitLocation.query.get(id)
    db.session.delete(user_location)
    db.session.commit()

    return unit_location_schema.jsonify(user_location), 200

@unit_location.route('/post', methods=['POST'])
@jwt_required()
def add_user_location():
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    description = request.json['description']
    unit_id = request.json['unit_id']
    location_name_id = request.json['location_name_id']
    customer_location_id = request.json['customer_location_id']
    creation_date = now
    modification_date = now

    new_user_location = UnitLocation(
        description, unit_id, location_name_id, customer_location_id, creation_date, modification_date)

    db.session.add(new_user_location)
    db.session.commit()

    return unit_location_schema.jsonify(new_user_location), 200
