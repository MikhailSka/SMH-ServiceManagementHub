from flask import request, Blueprint, jsonify
from flask_jwt_extended import jwt_required
from sqlalchemy import asc, desc, or_
from datetime import datetime
import json

from ...db import db
from .Unit import Unit
from .UnitView import UnitView
from .unitSchemas import unit_schema, units_view_schema, unit_view_schema

unit = Blueprint('unit', __name__, url_prefix='/unit')

@unit.route('/get', methods=['GET'])
@jwt_required()
def get_units():
    page = request.args.get('page', 0, type=int)
    page_size = request.args.get('page_size', 10, type=int)
    search_query = request.args.get('search', '', type=str)
    sort_field = request.args.get('sortField', 'id', type=str) 
    sort_order = request.args.get('sortOrder', 'asc', type=str) 

    search_date = None
    try:
        search_date = datetime.strptime(search_query, "%Y-%m-%d %H:%M:%S")
    except ValueError:
        pass

    filterList = request.args.get('filters', '{}', type=str)
    filterList = json.loads(filterList)

    all_units = UnitView.query

    if filterList:
        for field, values in filterList.items():
            all_units = all_units.filter(getattr(UnitView, field).in_(values))

    if search_query:
        all_units = all_units.filter(
            or_(
                UnitView.name.ilike(f'%{search_query}%'),
                UnitView.serial_number.ilike(f'%{search_query}%'),
                UnitView.product_code.ilike(f'%{search_query}%'),
                UnitView.location_name.ilike(f'%{search_query}%'),
                UnitView.device_name.ilike(f'%{search_query}%'),
                UnitView.operator_name.ilike(f'%{search_query}%'),
                UnitView.description.ilike(f'%{search_query}%'),
                UnitView.creation_date == search_date,
                UnitView.modification_date == search_date,
                UnitView.service_date == search_date
            )
        )

    if sort_field is not None and sort_field != '' and sort_field != 'null':
        if sort_order == 'asc':
            all_units = all_units.order_by(asc(getattr(UnitView, sort_field)))
        elif sort_order == 'desc':
            all_units = all_units.order_by(desc(getattr(UnitView, sort_field)))

    paginated_units = all_units.paginate(page=page, per_page=page_size, error_out=False)

    result = units_view_schema.dump(paginated_units.items)

    return jsonify({
        'data': result,
        'total': paginated_units.total
    })


@unit.route('/get/<id>', methods=['GET'])
@jwt_required()
def get_unit(id):
    unit = UnitView.query.get(id)
    return unit_view_schema.jsonify(unit), 200

@unit.route('/update/<id>', methods=['PUT'])
@jwt_required()
def update_unit(id):
    unit = Unit.query.get(id)

    unit.active = request.json['active']
    unit.name = request.json['name']
    unit.serial_number = request.json['serial_number']
    unit.product_code = request.json['product_code']
    unit.location_id = request.json['location_id']
    unit.device_id = request.json['device_id']
    unit.operator_id = request.json['operator_id']
    unit.description = request.json['description']
    unit.service_date = request.json['service_date']
    unit.modification_date = datetime.now()

    db.session.commit()

    return unit_schema.jsonify(unit), 200

@unit.route('/delete/<id>', methods=['DELETE'])
@jwt_required()
def delete_unit(id):
    unit = Unit.query.get(id)
    db.session.delete(unit)
    db.session.commit()

    return unit_schema.jsonify(unit), 200

@unit.route('/post', methods=['POST'])
@jwt_required()
def add_unit():
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    name = request.json['name']
    active = request.json['active']
    serial_number = request.json['serial_number']
    product_code = request.json['product_code']
    location_id = request.json['location_id']
    device_id = request.json['device_id']
    operator_id = request.json['operator_id']
    description = request.json['description']
    service_date = request.json['service_date']
    creation_date = now
    modification_date = now

    new_unit = Unit(active,name, serial_number, product_code,location_id, device_id,
                    operator_id, description, creation_date, modification_date,service_date)

    db.session.add(new_unit)
    db.session.commit()

    return unit_schema.jsonify(new_unit), 200