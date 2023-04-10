from flask import request, Blueprint, jsonify
from datetime import datetime

from .Location import Location
from .locationSchemas import location_schema, locations_schema
from ...db import db

location = Blueprint('location', __name__, url_prefix='/location')


@location.route('/get', methods=['GET'])
def get_locations():
    all_locations = Location.query.all()
    result = locations_schema.dump(all_locations)
    return jsonify(result)


@location.route('/get/<id>', methods=['GET'])
def get_location(id):
    location = Location.query.get(id)
    return location_schema.jsonify(location)


@location.route('/post', methods=['POST'])
def add_location():
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    name = request.json['name']
    active = request.json['active']
    creation_date = now
    modification_date = now

    new_location = Location(name, active, creation_date, modification_date)

    db.session.add(new_location)
    db.session.commit()

    return locations_schema.jsonify(new_location)


@location.route('/update/<id>', methods=['PUT'])
def update_location(id):
    location = Location.query.get(id)

    location.name = request.json['name']
    location.active = request.json['active']
    location.modification_date = datetime.now()

    db.session.commit()

    return location_schema.jsonify(location)


@location.route('/delete/<id>', methods=['DELETE'])
def delete_location(id):
    location = Location.query.get(id)
    db.session.delete(location)
    db.session.commit()

    return location_schema.jsonify(location)
