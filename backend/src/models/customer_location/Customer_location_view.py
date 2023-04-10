from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid

from ...db import db

class Customer_location_view(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(128), unique=True, nullable=False)
    address = db.Column(db.String(128), unique=True, nullable=False)
    customer_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    customer_name = db.Column(db.String(128), unique=True, nullable=False)
    active = db.Column(db.Boolean, nullable=False)
    creation_date = db.Column(db.DateTime, unique=True,
                              nullable=False, default=datetime.now())
    modification_date = db.Column(
        db.DateTime, unique=True, nullable=False, default=datetime.now())

    def __init__(self, id, name, address, customer_id, customer_name, active, creation_date, modification_date):
        self.id = id
        self.name = name
        self.address = address
        self.customer_id = customer_id
        self.customer_name = customer_name
        self.active = active
        self.creation_date = creation_date
        self.modification_date = modification_date

    def __init__(self, name, address, customer_id, customer_name, active, creation_date, modification_date):
        self.name = name
        self.address = address
        self.customer_id = customer_id
        self.customer_name = customer_name
        self.active = active
        self.creation_date = creation_date
        self.modification_date = modification_date
