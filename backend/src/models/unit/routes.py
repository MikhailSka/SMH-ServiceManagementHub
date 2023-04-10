from flask import request, Blueprint, jsonify
from datetime import datetime

from ...db import db
from .Unit import Unit
from .Unit_view import Unit_view
from .unitSchemas import unit_schema
from .unitViewSchemas import units_view_schema, unit_view_schema

unit = Blueprint('unit', __name__, url_prefix='/unit')


@unit.route('/get', methods=['GET'])
def get_units():
    all_units = Unit_view.query.all()
    result = units_view_schema.dump(all_units)
    return jsonify(result)


@unit.route('/get/<id>', methods=['GET'])
def get_unit(id):
    unit = Unit_view.query.get(id)
    return unit_view_schema.jsonify(unit)


@unit.route('/update/<id>', methods=['PUT'])
def update_unit(id):
    unit = Unit.query.get(id)

    unit.name = request.json['name']
    unit.active = request.json['active']
    unit.serial_number = request.json['serial_number']
    unit.product_code = request.json['product_code']
    unit.device_id = request.json['device_id']
    unit.operator_id = request.json['operator_id']
    unit.description = request.json['description']
    unit.modification_date = datetime.now()

    db.session.commit()

    return unit_schema.jsonify(unit)


@unit.route('/delete/<id>', methods=['DELETE'])
def delete_unit(id):
    unit = Unit.query.get(id)
    db.session.delete(unit)
    db.session.commit()

    return unit_schema.jsonify(unit)


@unit.route('/post', methods=['POST'])
def add_unit():
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    name = request.json['name']
    active = request.json['active']
    serial_number = request.json['serial_number']
    product_code = request.json['product_code']
    device_id = request.json['device_id']
    operator_id = request.json['operator_id']
    description = request.json['description']
    creation_date = now
    modification_date = now

    new_unit = Unit(name, active, serial_number, product_code, device_id,
                    operator_id, description, creation_date, modification_date)

    db.session.add(new_unit)
    db.session.commit()

    return unit_schema.jsonify(new_unit)
