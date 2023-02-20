from sqlalchemy.dialects.postgresql import UUID 
from datetime import datetime
import uuid

from server.src.db import db

class User(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    active = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    role = db.Column(db.Boolean, nullable=False)
    creation_date = db.Column(db.DateTime, unique=True, nullable=False, default=datetime.now())
    modification_date = db.Column(db.DateTime, unique=True, nullable=False, default=datetime.now())

    def __init__(self, id, active, email, password, role, creation_date, modification_date):
        self.id = id
        self.active = active
        self.email = email
        self.password = password
        self.role = role
        self.creation_date = creation_date
        self.modification_date = modification_date

    def __init__(self, active, email, password, role, creation_date, modification_date):
        self.active = active
        self.email = email
        self.password = password
        self.role = role
        self.creation_date = creation_date
        self.modification_date = modification_date





#Get
