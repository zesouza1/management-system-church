from flask import Blueprint

user_bp = Blueprint('users', __name__, url_prefix='/user')

@user_bp.route('/users', methods=['GET'])
def user():
    return "Welcome to the Routes Blueprint!"