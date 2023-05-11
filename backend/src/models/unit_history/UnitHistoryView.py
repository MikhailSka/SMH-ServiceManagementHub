from ...db import db
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid


class UnitHistoryView(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    unit_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    unit_name = db.Column(db.String(128), unique=True, nullable=False)
    location_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    location_name = db.Column(db.String(128), unique=True, nullable=False)
    user_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    user_name = db.Column(
        db.String(128), unique=True, nullable=False)
    creation_date = db.Column(db.DateTime, unique=True,
                              nullable=False, default=datetime.now())

    def __init__(self, id, unit_id, unit_name, location_id, location_name, user_id, user_name, creation_date):
        self.id = id
        self.unit_id = unit_id
        self.unit_name = unit_name
        self.location_id = location_id
        self.location_name = location_name
        self.user_id = user_id
        self.user_name = user_name
        self.creation_date = creation_date

    def __init__(self, unit_id, unit_name, location_id, location_name, user_id, user_name, creation_date):
        self.unit_id = unit_id
        self.unit_name = unit_name
        self.location_id = location_id
        self.location_name = location_name
        self.user_id = user_id
        self.user_name = user_name
        self.creation_date = creation_date
