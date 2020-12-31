function findBook(books, id)
{
    return books.find((book) => {
        console.log(book.id, id)
        if(book.id === parseInt(id)) {
            return book;
        }
    });
}

function findBookGenre(genres, book) {
    return genres.find((genre) => {
        if(genre.id === book.genre) {
            return genre;
        }
    });
}

export default {
    findBook,
    findBookGenre
}