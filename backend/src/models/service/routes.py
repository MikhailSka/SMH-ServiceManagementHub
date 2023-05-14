from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from datetime import datetime

from ...db import db
from ..unit.Unit import Unit
from ..unit.unitSchemas import unit_schema
from ..unit_history.UnitHistory import UnitHistory
from ..unit_history.unitLocationHistorySchemas import unit_history_schema
from .ServiceView import ServiceView
from .serviceSchemas import services_schema

service = Blueprint('service', __name__, url_prefix='/service')

@service.route('/get', methods=['GET'])
@jwt_required()
def get_units():
    all_services = ServiceView.query.all()
    result = services_schema.dump(all_services)
    return jsonify(result)

@service.route('/update', methods=['PUT'])
@jwt_required()
def update_unit():
    data = request.get_json()

    unit_id = data.get('id')
    new_location_id = data.get('location_id')
    new_description = data.get('description')
    new_service_date = data.get('service_date')
    user_id = data.get('user_id')

    unit = Unit.query.get(unit_id)
    if not unit:
        return jsonify({"message": "Unit not found"}), 404

    unit.location_id = new_location_id
    unit.description = new_description
    unit.service_date = new_service_date
    unit.modification_date = datetime.now()

    db.session.add(unit)
    
    unit_history = UnitHistory(
        unit_id=unit_id,
        location_id=new_location_id,
        user_id=user_id,
        description=new_description,
        service_date=new_service_date,
        creation_date=datetime.now()
    )

    db.session.add(unit_history)
    
    db.session.commit()

    updated_unit = unit_schema.dump(unit)
    new_history = unit_history_schema.dump(unit_history)

    return jsonify({'unit': updated_unit, 'history': new_history}), 200
