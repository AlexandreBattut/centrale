"""
Define the REST verbs relative to the notes
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import NoteRepository, NoteAllRepository
from util import parse_params


class NoteResource(Resource):
    """ Verbs relative to the notes """

    @staticmethod
    @swag_from("../swagger/note/GET.yml")
    def get(user_first_name, user_last_name, movie):
        """ Return an note information based on its primary keys """
        notation = NoteRepository.get(user_first_name=user_first_name, user_last_name=user_last_name, movie=movie)
        return jsonify({"note": notation.json})

    @staticmethod
    @parse_params(
        Argument("note", location="json", required=True, help="The note given to the movie by the user.")
    )
    @swag_from("../swagger/note/POST.yml")
    def post(user_first_name, user_last_name, movie, note):
        """ Create an note based on the sent information """
        notation = NoteRepository.create(
            user_first_name=user_first_name, user_last_name=user_last_name, movie=movie, note=note
        )
        return jsonify({"note": notation.json})

    @staticmethod
    @parse_params(
        Argument("note", location="json", required=True, help="The note given to the movie by the user.")
    )
    @swag_from("../swagger/note/PUT.yml")
    def put(user_first_name, user_last_name, movie, note):
        """ Update an note based on the sent information """
        repository = NoteRepository()
        notation = repository.update(user_first_name=user_first_name, user_last_name=user_last_name, movie=movie, note=note)
        return jsonify({"note": notation.json})

class NoteAllResource(Resource):
    @staticmethod
    @swag_from("../swagger/note/GET_all.yml")
    def get(movie):
        user_notes = NoteAllRepository.get(movie=movie)
        all_notes = [user_note.return_note() for user_note in user_notes]
        sum = 0
        count = 0
        for note in all_notes:
            sum += note
            count+=1
        return sum/count

