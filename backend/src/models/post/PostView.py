from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid

from ...db import db

class PostView(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = db.Column(db.String(256), unique=True, nullable=False)
    user_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    user_name = db.Column(db.String(128), unique=True, nullable=False)
    image = db.Column(db.String(256), nullable=True)
    content = db.Column(db.Text, nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False, default=datetime.now())

    def __init__(self, id, title, user_id, user_name, image, content, creation_date):
        self.id = id
        self.title = title
        self.user_id = user_id
        self.user_name = user_name
        self.image = image
        self.content = content
        self.creation_date = creation_date

    def __init__(self, title, user_id, user_name, image, content, creation_date):
        self.title = title
        self.user_id = user_id
        self.user_name = user_name
        self.image = image
        self.content = content
        self.creation_date = creation_date