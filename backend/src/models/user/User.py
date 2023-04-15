from sqlalchemy.dialects.postgresql import UUID 
from datetime import datetime
import uuid

from ...db import db

class User(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    active = db.Column(db.Boolean, nullable=False)
    email = db.Column(db.String(128), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    admin = db.Column(db.Boolean, nullable=False)
    name = db.Column(db.String(128), unique=True, nullable=False)
    image = db.Column(db.Text, nullable=True)  
    creation_date = db.Column(db.DateTime, unique=True, nullable=False, default=datetime.now())
    modification_date = db.Column(db.DateTime, unique=True, nullable=False, default=datetime.now())


    def __init__(self, id, active, email, password, admin, name , image , creation_date, modification_date):
        self.id = id
        self.active = active
        self.email = email
        self.name = name
        self.password = password
        self.admin = admin
        self.image  = image
        self.creation_date = creation_date
        self.modification_date = modification_date

    def __init__(self, active, email, password, admin, name , image , creation_date, modification_date):
        self.active = active
        self.email = email
        self.name = name
        self.password = password
        self.admin = admin
        self.image  = image
        self.creation_date = creation_date
        self.modification_date = modification_date