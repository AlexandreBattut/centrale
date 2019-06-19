""" Defines the movie repository """

from models import Movie


class MovieRepository:
    """ The repository for the movie model """

    @staticmethod
    def get(title):
        """ Query a movie by the title """
        return Movie.query.filter_by(title=title).first()


    def update(self, title, author, length, genre, image, note):
        """ Update a movie's caracteristics """
        movie = self.get(title)
        movie.author=author
        movie.length=length
        movie.genre=genre
        movie.note=note
        movie.image=image

        return movie.save()

    @staticmethod
    def create(title,author, length, genre, image, note):
        """ Create a new movie """
        movie = Movie(title=title, author=author, length=length, genre=genre, image=image, note=note)

        return movie.save()

class MovieAuthorRepository:
    """ The repository for the movie model """

    @staticmethod
    def get(author):
        """ Query a movie by the author """
        return Movie.query.filter_by(author=author).all()
		