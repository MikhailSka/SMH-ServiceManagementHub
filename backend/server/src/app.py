import os
from flask import Flask
from flask_cors import CORS
from flask_restful import Api

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')

app = Flask(__name__)
api = Api(app)
app.url_map.strict_slashes = False

from ..models.customer.routes import customer
from ..models.customer_location.routes import customer_location
from ..models.device.routes import device
from ..models.location.routes import location
from ..models.operator.routes import operator
from ..models.unit.routes import unit
from ..models.unit_location.routes import unit_location
from ..models.unit_location_history.routes import unit_location_history
from ..models.user.routes import user


app.register_blueprint(customer)
app.register_blueprint(customer_location)
app.register_blueprint(device)
app.register_blueprint(location)
app.register_blueprint(operator)
app.register_blueprint(unit)
app.register_blueprint(unit_location)
app.register_blueprint(unit_location_history)
app.register_blueprint(user)

CORS(app)