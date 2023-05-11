from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid

from ...db import db


class Unit(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    active = db.Column(db.Boolean, nullable=False)
    name = db.Column(db.String(128), unique=True, nullable=False)
    serial_number = db.Column(db.String(128), unique=True, nullable=False)
    product_code = db.Column(db.String(128), unique=True, nullable=False)
    location_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    device_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    operator_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    description = db.Column(db.String(256), unique=True, nullable=False)
    creation_date = db.Column(db.DateTime, unique=True,
                              nullable=False, default=datetime.now())
    modification_date = db.Column(
        db.DateTime, unique=True, nullable=False, default=datetime.now())

    def __init__(self, id, active, name, serial_number, product_code,location_id, device_id, operator_id, description, creation_date, modification_date):
        self.id = id
        self.name = name
        self.active = active
        self.serial_number = serial_number
        self.product_code = product_code
        self.location_id = location_id
        self.device_id = device_id
        self.operator_id = operator_id
        self.description = description
        self.creation_date = creation_date
        self.modification_date = modification_date

    def __init__(self, active, name, serial_number, product_code,location_id, device_id, operator_id, description, creation_date, modification_date):
        self.name = name
        self.active = active
        self.serial_number = serial_number
        self.product_code = product_code
        self.location_id = location_id
        self.device_id = device_id
        self.operator_id = operator_id
        self.description = description
        self.creation_date = creation_date
        self.modification_date = modification_date