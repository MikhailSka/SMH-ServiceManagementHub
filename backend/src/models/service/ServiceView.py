from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid

from ...db import db


class ServiceView(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    active = db.Column(db.Boolean, nullable=False)
    name = db.Column(db.String(128), unique=True, nullable=False)
    serial_number = db.Column(db.String(128), unique=True, nullable=False)
    product_code = db.Column(db.String(128), unique=True, nullable=False)
    location_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    location_name = db.Column(db.String(128), unique=True, nullable=False)
    customer_name = db.Column(db.String(128), unique=True, nullable=False)
    nip = db.Column(db.String(128), unique=True, nullable=False)
    device_name = db.Column(db.String(128), unique=True, nullable=False)
    operator_name = db.Column(db.String(128), unique=True, nullable=False)
    description = db.Column(db.String(256), unique=True, nullable=False)
    creation_date = db.Column(db.DateTime, unique=True,
                              nullable=False, default=datetime.now())
    modification_date = db.Column(
        db.DateTime, unique=True, nullable=False, default=datetime.now())
    service_date = db.Column(
        db.DateTime, unique=True, nullable=False)

    def __init__(self, id, active, name, serial_number, product_code, location_id, location_name,
                 customer_name, nip, device_name, operator_name, description, creation_date, modification_date,service_date):
        self.id = id
        self.name = name
        self.active = active
        self.serial_number = serial_number
        self.product_code = product_code
        self.location_id = location_id
        self.device_name = location_name
        self.customer_name = customer_name
        self.nip = nip
        self.device_name = device_name
        self.operator_name = operator_name
        self.description = description
        self.creation_date = creation_date
        self.modification_date = modification_date
        self.service_date = service_date
