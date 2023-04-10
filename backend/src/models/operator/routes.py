from flask import Blueprint, jsonify, request
from datetime import datetime

from .Operator import Operator
from .operatorSchemas import operator_schema, operators_schema
from ...db import db


operator = Blueprint('operator', __name__, url_prefix='/operator')


@operator.route('/get', methods=['GET'])
def get_operators():
    all_operators = Operator.query.all()
    result = operators_schema.dump(all_operators)
    return jsonify(result)


@operator.route('/get/<id>', methods=['GET'])
def get_operator(id):
    operator = Operator.query.get(id)
    return operator_schema.jsonify(operator)


@operator.route('/post', methods=['POST'])
def add_operator():
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    name = request.json['name']
    active = request.json['active']
    creation_date = now
    modification_date = now

    new_operator = Operator(name, active, creation_date, modification_date)

    db.session.add(new_operator)
    db.session.commit()

    return operators_schema.jsonify(new_operator)


@operator.route('/update/<id>', methods=['PUT'])
def update_operator(id):
    operator = Operator.query.get(id)

    operator.name = request.json['name']
    operator.active = request.json['active']
    operator.modification_date = datetime.now()

    db.session.commit()

    return operator_schema.jsonify(operator)


@operator.route('/delete/<id>', methods=['DELETE'])
def delete_operator(id):
    operator = Operator.query.get(id)
    db.session.delete(operator)
    db.session.commit()

    return operator_schema.jsonify(operator)
