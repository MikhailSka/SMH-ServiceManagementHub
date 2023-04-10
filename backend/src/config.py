import os
from datetime import timedelta

class Config:
    ENV = os.getenv("FLASK_ENV")
    SECRET_KEY = 'your-secret-key'
    JWT_SECRET_KEY = 'your-jwt-secret-key'
    PERMANENT_SESSION_LIFETIME = timedelta(days=1)
    CORS_HEADERS = 'Content-Type'

class DbConfiguration:
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:1234@localhost:5432/SMHdb'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'secret_key'