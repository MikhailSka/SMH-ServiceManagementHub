from ...db import db
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid


class UnitHistory(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    unit_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    location_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    user_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    creation_date = db.Column(db.DateTime, unique=True,
                              nullable=False, default=datetime.now())

    def __init__(self, id, unit_id, location_id, user_id, creation_date):
        self.id = id
        self.unit_id = unit_id
        self.location_id = location_id
        self.user_id = user_id
        self.creation_date = creation_date

    def __init__(self, unit_id, location_id, user_id, creation_date):
        self.unit_id = unit_id
        self.location_id = location_id
        self.user_id = user_id
        self.creation_date = creation_date
