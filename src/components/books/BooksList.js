import React from "react";
import BookItem from "./BookItem";

const BooksList = ({ books }) => {
    return (
        <div>
            <h1>Books:</h1>
            <ul>
                {books.map(el => <BookItem key={el._id} book={el} />)}
            </ul>
        </div>
    );
}

export default BooksList;