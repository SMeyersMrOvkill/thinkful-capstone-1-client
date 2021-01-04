function findBook(books, id)
{
    return books.find((book) => {
        console.log(book.id, id)
        if(book.id === parseInt(id)) {
            return book;
        }
    });
}

export default {
    findBook
}