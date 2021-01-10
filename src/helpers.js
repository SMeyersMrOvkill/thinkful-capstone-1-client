function findBook(books, id)
{
    return books.find((book) => {
        if(book.id === parseInt(id)) {
            return book;
        }
    });
}

export default {
    findBook
}