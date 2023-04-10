from flask import jsonify, session

from ...app import app

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('jwt_token', None)
    return jsonify({"message": "Logged out successfully"}), 200