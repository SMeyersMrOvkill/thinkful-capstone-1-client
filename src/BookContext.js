import React from 'react';

const NoteContext = React.createContext({
    genres: [],
    books: [],
    updateBook: (book) => {},
    addBook: (book) => {},
    deleteBook: (book) => {}
})

export default NoteContext;