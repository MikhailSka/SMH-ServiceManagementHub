from flask import request, Blueprint, jsonify
from datetime import datetime

from ...db import db
from .User import User
from .userSchemas import user_schema, users_schema

user = Blueprint('user', __name__, url_prefix='/user')


@user.route('/get', methods=['GET'])
def get_users():
    all_users = User.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result)


@user.route('/get/<id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    return user_schema.jsonify(user)


@user.route('/update/<id>', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)

    email = request.json['email']
    description = request.json['description']
    password = request.json['password']
    role = request.json['role']
    active = request.json['active']
    creation_date = request.json['creation_date']
    modification_date = request.json['modification_date']

    user.email = email
    user.description = description
    user.password = password
    user.role = role
    user.active = active
    user.creation_date = creation_date
    user.modification_date = modification_date

    db.session.commit()

    return user_schema.jsonify(user)


@user.route('/delete/<id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()

    return user_schema.jsonify(user)


@user.route('/add', methods=['POST'])
def add_user():
    email = request.json['email']
    description = request.json['description']
    password = request.json['password']
    role = request.json['role']
    active = request.json['active']
    creation_date = request.json['creation_date']
    modification_date = request.json['modification_date']

    new_user = User(active, email, description, password, role,
                    creation_date, modification_date)

    db.session.add(new_user)
    db.session.commit()

    return users_schema.jsonify(new_user)
