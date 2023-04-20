from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid

from ...db import db

class Post(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = db.Column(db.String(256), unique=True, nullable=False)
    user_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    content = db.Column(db.Text, nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False, default=datetime.now())

    def __init__(self, id, title, user_id, content, creation_date):
        self.id = id
        self.title = title
        self.user_id = user_id
        self.content = content
        self.creation_date = creation_date

    def __init__(self, title, user_id, content, creation_date):
        self.title = title
        self.user_id = user_id
        self.content = content
        self.creation_date = creation_date