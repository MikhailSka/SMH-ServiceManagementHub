from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from datetime import datetime

from ...db import db
from .Device import Device
from .deviceSchemas import device_schema, devices_schema

device = Blueprint('device', __name__, url_prefix='/device')


@device.route('/get', methods=['GET'])
@jwt_required()
def get_devices():
    all_devices = Device.query.all()
    result = devices_schema.dump(all_devices)
    return jsonify(result)


@device.route('/get/<id>', methods=['GET'])
@jwt_required()
def get_device(id):
    device = Device.query.get(id)
    return device_schema.jsonify(device)


@device.route('/post', methods=['POST'])
@jwt_required()
def add_device():
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    name = request.json['name']
    active = request.json['active']
    creation_date = now
    modification_date = now

    new_device = Device(name, active, creation_date, modification_date)

    db.session.add(new_device)
    db.session.commit()

    return device_schema.jsonify(new_device)


@device.route('/update/<id>', methods=['PUT'])
@jwt_required()
def update_device(id):
    device = Device.query.get(id)

    device.name = request.json['name']
    device.active = request.json['active']
    device.modification_date = datetime.now()

    db.session.commit()

    return device_schema.jsonify(device)


@device.route('/delete/<id>', methods=['DELETE'])
@jwt_required()
def delete_device(id):
    device = Device.query.get(id)
    db.session.delete(device)
    db.session.commit()

    return device_schema.jsonify(device)
