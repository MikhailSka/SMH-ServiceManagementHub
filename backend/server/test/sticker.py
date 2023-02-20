from sqlalchemy.dialects.postgresql import UUID
from app import db,app
from datetime import datetime
import uuid
from flask import request
from user import User

class Sticker(db.Model):
    _id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
    title = db.Column(db.String(128), unique=True, nullable=False)
    contains = db.Column(db.String(512), unique=True, nullable=False)
    active = db.Column(db.Boolean, nullable=False)
    creation_date = db.Column(db.DateTime, unique=True, nullable=False, default=datetime.now())
    modification_date = db.Column(db.DateTime, unique=True, nullable=False, default=datetime.now())
    

    def __init__(self, *args, **kwargs):
        super(Sticker, self).__init__(*args, **kwargs)
    
    def to_dict(self):
        return {
            'id': self._id,
            'user_name': (db.session.query(User).filter(User._id == self.user_id).first()).login,
            'title': self.title,
            'contains': self.contains,
            'active': self.active,
            'creation_date': self.creation_date,
            'modification_date': self.modification_date
        }

@app.route('/api/sticker/data')
def data():
    query = Sticker.query

    # search filter
    search = request.args.get('search[value]')
    if search:
        query = query.filter(db.or_(
            (db.session.query(User).filter(User._id == Sticker.unit_id).first()).name.like(f'%{search}%'),
            Sticker.title.like(f'%{search}%'),
            Sticker.contains.like(f'%{search}%'),
            Sticker.active.like(f'%{search}%'),
            Sticker.creation_date.like(f'%{search}%'),
            Sticker.modification_date.like(f'%{search}%')
        ))
    total_filtered = query.count()

    # sorting
    order = []
    i = 0
    while True:
        col_index = request.args.get(f'order[{i}][column]')
        if col_index is None:
            break
        col_name = request.args.get(f'columns[{col_index}][data]')
        if col_name not in ['title', 'contains', 'active','creation_date', "modification_date"]:
            col_name = 'title'         
        descending = request.args.get(f'order[{i}][dir]') == 'desc'
        col = getattr(Sticker, col_name)
        if descending:
            col = col.desc()
        order.append(col)
        i += 1
    if order:
        query = query.order_by(*order)

    # pagination
    start = request.args.get('start', type=int)
    length = request.args.get('length', type=int)
    query = query.offset(start).limit(length)

    # response
    return {
        'data': [user.to_dict() for user in query],
        'recordsFiltered': total_filtered,
        'recordsTotal': Sticker.query.count(),
        'draw': request.args.get('draw', type=int),
    }