"""
Define the REST verbs relative to the movies
"""
import json
from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import MovieRepository
from repositories import MovieAuthorRepository
from util import parse_params


class MovieResource(Resource):
    """ Verbs relative to the movie """

    @staticmethod
    @swag_from("../swagger/movie/GET.yml")
    def get(title):
        """ Return an movie key information based on his title """
        movie = MovieRepository.get(title=title)
        return jsonify({"movie": movie.json})

    @staticmethod
    @parse_params(
        Argument("author", location="json", required=True, help="The author of the movie:"),
        Argument("length", location="json", required=True, help="The length of the movie:"),
        Argument("genre", location="json", required=True, help="The genre of the movie:"),
        Argument("image", location="json", required=True, help="The cover of the movie."),
        Argument("note", location="json", required=True, help="The note given by the user to the movie.")
    )
    @swag_from("../swagger/movie/POST.yml")
    def post(title, author,length, genre, image, note):
        """ Create an movie based on the sent information """
        movie = MovieRepository.create(
            title=title, author=author, length=length, genre=genre, image=image, note=note
        )
        return jsonify({"movie": movie.json})

    @staticmethod
    @parse_params(
        Argument("author", location="json", required=True, help="The author of the movie:"),
        Argument("length", location="json", required=True, help="The length of the movie:"),
        Argument("genre", location="json", required=True, help="The genre of the movie:"),
        Argument("image", location="json", required=True, help="The cover of the movie."),
        Argument("note", location="json", required=True, help="The note given by the user to the movie.")
    )
    @swag_from("../swagger/movie/PUT.yml")
    def put(title, author,length, genre, image, note):
        """ Update an movie based on the sent information """
        repository = MovieRepository()
        movie = repository.update(title=title, author=author, length=length, genre=genre, image=image, note=note)
        return jsonify({"movie": movie.json})
class MovieAuthorResource(Resource):

   @staticmethod
   @swag_from("../swagger/movie/GET_author.yml")
   def get(author):
       movies = MovieAuthorRepository.get(author=author)
       return jsonify([movie.serialize() for movie in movies])

