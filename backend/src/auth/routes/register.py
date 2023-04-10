from flask import request, jsonify
from werkzeug.security import generate_password_hash
from datetime import datetime

from ..get_user_by_email import get_user_by_email
from ...models.user.User import User
from ...app import app
from ...db import db


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    email = data.get('email', None)
    password = data.get('password', None)

    if email is None or password is None:
        return jsonify({"error": "Missing required fields"}), 400

    if get_user_by_email(email):
        return jsonify({"error": "Email already exists"}), 409

    hashed_password = generate_password_hash(password)

    new_user = User(active=True, email=email, password=hashed_password, role=False,
                    creation_date=datetime.now(), modification_date=datetime.now())
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201