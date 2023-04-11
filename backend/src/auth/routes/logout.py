from flask import jsonify
from flask_jwt_extended import unset_jwt_cookies

from ...app import app

@app.route('/logout', methods=['POST'])
def logout():
    resp = jsonify({"message": "Logged out successfully"})
    unset_jwt_cookies(resp)
    return resp, 200