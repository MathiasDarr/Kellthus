from flask import Blueprint, current_app, request, jsonify
import logging


api = Blueprint("trip_reports_api", __name__)
log = logging.getLogger('werkzeug')

@api.route('/api/test')
def test():
    return jsonify({"title":"title1", "body": "body1"})


@api.route('/api/2/bard', methods=['GET'])
def bard():
    log.info("dfad")
    return "adfa"
