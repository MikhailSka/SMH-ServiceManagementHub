from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from datetime import datetime

from ...db import db
from .PostView import PostView
from .Post import Post
from .postSchemas import post_schema, post_view_schema, posts_view_schema
from flask_jwt_extended import jwt_required

post = Blueprint('post', __name__, url_prefix='/post')


@post.route('/get', methods=['GET'])
@jwt_required()
def get_post_views():
    all_post_views = PostView.query.all()
    result = posts_view_schema.dump(all_post_views)
    return jsonify(result), 200


@post.route('/get/<id>', methods=['GET'])
@jwt_required()
def get_post_view(id):
    post_view = PostView.query.get(id)
    return post_view_schema.jsonify(post_view), 200


@post.route('/update/<id>', methods=['PUT'])
@jwt_required()
def update_post(id):
    post = Post.query.get(id)

    post.title = request.json['title']
    post.user_id = request.json['user_id']
    post.content = request.json['content']

    db.session.commit()

    return post_schema.jsonify(post), 200


@post.route('/delete/<id>', methods=['DELETE'])
@jwt_required()
def delete_post(id):
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()

    return post_schema.jsonify(post), 200


@post.route('/post', methods=['POST'])
@jwt_required()
def add_post():
    title = request.json['title']
    user_id = request.json['user_id']
    content = request.json['content']
    creation_date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    new_post = Post(title, user_id, content, creation_date)

    db.session.add(new_post)
    db.session.commit()

    return post_schema.jsonify(new_post), 201