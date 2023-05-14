import os
from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from flask_jwt_extended import JWTManager

from .config import Config

static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')

app = Flask(__name__)
app.config.from_object(Config)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True,
     allow_headers=[
         'Content-Type', 'Authorization', 'Access-Control-Allow-Credentials'],
     expose_headers=['Content-Type', 'Authorization',
                     'Access-Control-Allow-Credentials'],
     allow_methods=['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'])
api = Api(app)
app.url_map.strict_slashes = False

jwt = JWTManager(app)

from .models.customer.routes import customer
from .models.device.routes import device
from .models.location.routes import location
from .models.operator.routes import operator
from .models.unit.routes import unit
from .models.unit_history.routes import unit_history
from .models.user.routes import user
from .models.post.routes import post
from .models.service.routes import service

app.register_blueprint(customer)
app.register_blueprint(device)
app.register_blueprint(location)
app.register_blueprint(operator)
app.register_blueprint(unit)
app.register_blueprint(unit_history)
app.register_blueprint(user)
app.register_blueprint(post)
app.register_blueprint(service)