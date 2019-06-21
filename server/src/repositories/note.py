""" Defines the Note repository """

from models import Note


class NoteRepository:
    """ The repository for the note model """

    @staticmethod
    def get(user_first_name, user_last_name, movie):
        """ Query a note by last and first name of the user and the movie's title"""
        return Note.query.filter_by(user_first_name=user_first_name, user_last_name=user_last_name, movie=movie).one()

    def update(self, user_first_name, user_last_name, movie, note):
        """ Update a note """
        notation = self.get(user_first_name, user_last_name, _movie)
        notation.note = note

        return notation.save()

    @staticmethod
    def create(user_first_name, user_last_name, movie, note):
        """ Create a new note """
        notation = Note(user_first_name=user_first_name, user_last_name=user_last_name, movie=movie, note=note)

        return notation.save()

class NoteAllRepository:

    @staticmethod
    def get(movie):
        return Note.query.filter_by(movie=movie).all()