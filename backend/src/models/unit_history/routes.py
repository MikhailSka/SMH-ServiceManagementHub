from flask import request, Blueprint, jsonify
from flask_jwt_extended import jwt_required
from ...db import db
from datetime import datetime

from .UnitHistory import UnitHistory
from .UnitHistoryView import UnitHistoryView
from .unitLocationHistorySchemas import unit_history_schema, unit_history_view_schema

unit_history = Blueprint('location_history', __name__,
                                  url_prefix='/location_history')

@jwt_required()
@unit_history.route('/get', methods=['GET'])
def get_user_locations_history():
    all_unit_location_historys = UnitHistoryView.query.all()
    result = unit_history_view_schema.dump(
        all_unit_location_historys)
    return jsonify(result)

@jwt_required()
@unit_history.route('/post', methods=['POST'])
def add_user_history():
    description = request.json['description']
    unit_id = request.json['unit_id']
    location_id = request.json['location_id']
    user_id = request.json['user_id']
    creation_date = datetime.now()

    new_unit_history = UnitHistory(
        description, unit_id, location_id, user_id, creation_date)

    db.session.add(new_unit_history)
    db.session.commit()

    return unit_history_schema.jsonify(new_unit_history)
