import React from "react";

const BookItem = ({ book }) => {

    return (
        <li>{book.title} {book.author}</li>
    );
}

export default BookItem;