"""
Define the Note model
"""
from . import db
from .abc import BaseModel, MetaBaseModel


class Note(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The Note model """

    __tablename__ = "note"

    user_first_name = db.Column(db.String(300), primary_key=True)
    user_last_name = db.Column(db.String(300), primary_key=True)
    movie = db.Column(db.String(300), primary_key=True)
    note = db.Column(db.Integer)
    
    def __init__(self, user_first_name, user_last_name, movie, note):
        """ Create a new note """
        self.user_first_name = user_first_name
        self.user_last_name = user_last_name
        self.movie = movie
        self.note = note

    def return_note(self):
        return self.note
