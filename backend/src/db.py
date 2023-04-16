from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow 

from .app import app
from .config import DbConfiguration

app.config.from_object(DbConfiguration())

db = SQLAlchemy(app)
ma = Marshmallow(app)
MIGRATE = Migrate(app, db, compare_type = True)