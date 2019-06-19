"""
Defines the blueprint for the movie
"""
from flask import Blueprint
from flask_restful import Api

from resources import MovieResource
from resources import MovieAuthorResource

MOVIE_BLUEPRINT = Blueprint("movie", __name__)
Api(MOVIE_BLUEPRINT).add_resource(
    MovieResource, "/movie/<string:title>"
)
Api(MOVIE_BLUEPRINT).add_resource(
    MovieAuthorResource, "/movie_author/<string:author>"	
)
