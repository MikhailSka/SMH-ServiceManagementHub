from flask import request, jsonify, session, Response
from werkzeug.security import check_password_hash
from datetime import timedelta
from flask_jwt_extended import create_access_token

from ..get_user_by_email import get_user_by_email
from ...app import app

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    email = data.get('email', None)
    password = data.get('password', None)

    if email is None or password is None:
        return jsonify({"error": "Missing required fields"}), 400
    print(login)
    user = get_user_by_email(email)

    if not user or not check_password_hash(user.password, password):
        return jsonify({"error": "Invalid email or password"}), 401

    access_token = create_access_token(identity=user.email, expires_delta=timedelta(days=1), additional_claims={"role": user.role})

    session.permanent = True
    session['user_email'] = user.email
    
    return jsonify({'access_token': access_token}), 200
