from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required


from .UnitHistoryView import UnitHistoryView
from .unitLocationHistorySchemas import unit_histories_view_schema

unit_history = Blueprint('unit_history', __name__,
                                  url_prefix='/unit_history')

@jwt_required()
@unit_history.route('/get/<unit_id>', methods=['GET'])
def get_user_locations_history(unit_id):
    all_unit_location_historys = UnitHistoryView.query.filter_by(unit_id=unit_id).all()
    result = unit_histories_view_schema.dump(all_unit_location_historys)
    return jsonify(result)
