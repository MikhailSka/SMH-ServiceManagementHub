from flask import request, Blueprint, jsonify
from server.src.db import db
from datetime import datetime

from .Unit_location_history import Unit_location_history
from .Unit_location_history_view import Unit_location_history_view
from .unitLocationHistorySchemas import unit_location_history_schema
from .unitLocationHistoryViewSchemas import unit_location_history_view_schema, unit_locations_history_view_schema

unit_location_history = Blueprint('location_history', __name__,
                                  url_prefix='/location_history')


@unit_location_history.route('/get', methods=['GET'])
def get_user_locations_history():
    all_unit_location_historys = Unit_location_history_view.query.all()
    result = unit_locations_history_view_schema.dump(
        all_unit_location_historys)
    return jsonify(result)


@unit_location_history.route('/get/<id>', methods=['GET'])
def get_user_location_history(id):
    unit_location_history = Unit_location_history_view.query.get(id)
    return unit_location_history_view_schema.jsonify(unit_location_history)


@unit_location_history.route('/delete/<id>', methods=['DELETE'])
def delete_user_location_history(id):
    location_history = Unit_location_history.query.get(id)
    db.session.delete(location_history)
    db.session.commit()

    return unit_location_history_schema.jsonify(location_history)


@unit_location_history.route('/post', methods=['POST'])
def add_user_location_history():
    description = request.json['description']
    unit_id = request.json['unit_id']
    location_id = request.json['location_id']
    customer_location_id = request.json['customer_location_id']
    creation_date = datetime.now()

    new_unit_location_history = Unit_location_history(
        description, unit_id, location_id, customer_location_id, creation_date)

    db.session.add(new_unit_location_history)
    db.session.commit()

    return unit_location_history_schema.jsonify(new_unit_location_history)
