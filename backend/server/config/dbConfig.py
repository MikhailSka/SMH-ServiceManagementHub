class DbConfiguration(object):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI='postgresql://postgres:1234@localhost:5432/SMHdb'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'Knock on their hearts - knock with swords, Do not let them be strangers!'
    #JWT_SECRET_KEY = 'Let them hear how in the night the heart, Is aching for motherland.'