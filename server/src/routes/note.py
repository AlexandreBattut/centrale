"""
Defines the blueprint for the notes
"""
from flask import Blueprint
from flask_restful import Api

from resources import NoteResource, NoteAllResource

NOTE_BLUEPRINT = Blueprint("note", __name__)
Api(NOTE_BLUEPRINT).add_resource(
    NoteResource, "/note/<string:user_first_name>/<string:user_last_name>/<string:movie>"
)
Api(NOTE_BLUEPRINT).add_resource(
    NoteAllResource, "/note/<string:movie>"
)