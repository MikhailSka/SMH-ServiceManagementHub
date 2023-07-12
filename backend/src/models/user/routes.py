from flask import request, Blueprint, jsonify
from werkzeug.security import generate_password_hash
from flask_jwt_extended import unset_jwt_cookies
from werkzeug.security import check_password_hash
from flask_jwt_extended import create_refresh_token, create_access_token, get_jwt_identity, jwt_required, set_access_cookies, create_access_token
from datetime import datetime, timedelta
from PIL import Image
from io import BytesIO
import base64

from ...db import db
from .User import User
from .userSchemas import user_schema, users_schema
from .get_user_by_email import get_user_by_email

user = Blueprint('user', __name__, url_prefix='/user')

# Get  / Update / Delete


@user.route('/get', methods=['GET'])
@jwt_required()
def get_users():
    all_users = User.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result), 200


@user.route('/get/<id>', methods=['GET'])
@jwt_required()
def get_user(id):
    user = User.query.get(id)
    return user_schema.jsonify(user), 200


@user.route('/update/<id>', methods=['PUT'])
@jwt_required()
def update_user(id):
    user = User.query.get(id)

    email = request.json['email']
    name = request.json['name']
    password = request.json['password']
    admin = request.json['admin']
    active = request.json['active']
    image_path = None
    modification_date = datetime.now()

    user.email = email
    user.name = name
    user.password = password
    user.admin = admin
    user.active = active
    user.image_path = image_path
    user.modification_date = modification_date

    db.session.commit()

    return user_schema.jsonify(user), 200


@user.route('/delete/<id>', methods=['DELETE'])
@jwt_required()
def delete_user(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()

    return user_schema.jsonify(user)


# Fields


@user.route('/upload-image/<id>', methods=['POST'])
@jwt_required()
def upload_image(id):
    if "image" not in request.files:
        return {"error": "No image found in the request"}, 400
    image = request.files["image"]

    pil_image = Image.open(image)

    buffered_image = BytesIO()
    pil_image.save(buffered_image, format=pil_image.format)
    buffered_image.seek(0)

    image_base64 = base64.b64encode(buffered_image.read()).decode()

    user = User.query.get(id)
    user.image = f'data:image/jpeg;base64,{image_base64}'
    db.session.commit()
    return jsonify({"message": "Image uploaded successfully"}), 200


@user.route('/remove-image/<id>', methods=['POST'])
@jwt_required()
def remove_image(id):
    user = User.query.get(id)
    if not user:
        return {"error": "User not found"}, 404

    user.image = None
    db.session.commit()
    return jsonify({"message": "Image removed successfully"}), 200


@user.route('/update-name/<id>', methods=['PUT'])
@jwt_required()
def update_user_name(id):
    user = User.query.get(id)

    name = request.json['name']
    modification_date = datetime.now()

    user.name = name
    user.modification_date = modification_date

    db.session.commit()

    return user_schema.jsonify(user), 200


@user.route('/update-email/<id>', methods=['PUT'])
@jwt_required()
def update_user_email(id):
    user = User.query.get(id)

    email = request.json['email']
    modification_date = datetime.now()

    user.email = email
    user.modification_date = modification_date

    db.session.commit()

    return user_schema.jsonify(user), 200


#logining


@user.route('/register', methods=['POST'])
def add_user():
    email = request.json['email']
    name = request.json['name']
    password = request.json['password']
    admin = False
    active = True
    image_path = None
    creation_date = datetime.now()
    modification_date = datetime.now()

    if email is None or password is None:
        return jsonify({"error": "Missing required fields"}), 400

    if get_user_by_email(email):
        return jsonify({"error": "Email already exists"}), 409

    hashed_password = generate_password_hash(password)

    new_user = User(active, email, hashed_password, admin, name,
                    image_path, creation_date, modification_date)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully", }), 201


@user.route('/logout', methods=['POST'])
def logout():
    resp = jsonify({"message": "Logged out successfully"})
    unset_jwt_cookies(resp)
    return resp, 200


@user.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    email = data.get('email', None)
    password = data.get('password', None)

    if email is None or password is None:
        return jsonify({"error": "Missing required fields"}), 400

    user = get_user_by_email(email)

    if not user or not check_password_hash(user.password, password):
        return jsonify({"error": "Invalid email or password"}), 401

    access_token = create_access_token(identity=user.email,expires_delta=timedelta(
        hours=8), additional_claims={"id": user.id})
    refresh_token = create_refresh_token(identity=user.email,expires_delta=timedelta(
        hours=1))
    
    resp = jsonify({'access_token': access_token, 'refresh_token': refresh_token, 'image': user.image})
    set_access_cookies(resp, access_token)
    return resp, 200

@user.route('/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user)
    resp = jsonify({'access_token': access_token})
    return resp, 200