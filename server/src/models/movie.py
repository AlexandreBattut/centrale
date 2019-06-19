"""
Define the Movie model
"""
from . import db
from .abc import BaseModel, MetaBaseModel


class Movie(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The Movie model """

    __tablename__ = "movie"

    title = db.Column(db.String(300), primary_key=True)
    author = db.Column(db.String(300))
    length = db.Column(db.String(300), nullable=True)
    genre = db.Column(db.String(300),nullable=True)
    
    def __init__(self, title, author,genre, length=None):
        """ Create a new Movie """
        self.title = title
        self.author = author
        self.length = length
        self.genre= genre
		
    def serialize(self):
        return {"title":self.title,"author":self.author}
			