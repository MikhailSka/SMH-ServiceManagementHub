from ...db import db
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid


class Unit_location_history(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    description = db.Column(db.String(256), unique=True, nullable=False)
    unit_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    location_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    customer_location_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    creation_date = db.Column(db.DateTime, unique=True,
                              nullable=False, default=datetime.now())

    def __init__(self, id, description, unit_id, location_id, customer_location_id, creation_date):
        self.id = id
        self.description = description
        self.unit_id = unit_id
        self.location_id = location_id
        self.customer_location_id = customer_location_id
        self.creation_date = creation_date

    def __init__(self, description, unit_id, location_id, customer_location_id, creation_date):
        self.description = description
        self.unit_id = unit_id
        self.location_id = location_id
        self.customer_location_id = customer_location_id
        self.creation_date = creation_date
