from flask import Blueprint

from .login import login
from .logout import logout
from .register import register

auth_routes = Blueprint('auth_routes', __name__)

auth_routes.add_url_rule('/login', view_func=login, methods=['POST'])
auth_routes.add_url_rule('/logout', view_func=logout, methods=['POST'])
auth_routes.add_url_rule('/register', view_func=register, methods=['POST'])