import React from "react";
import BookItem from "./BookItem";

const BooksList = ({ books }) => {
    return (
        <table className="table w-75 mx-auto">
            <thead>
                <tr>
                    <th scope="col">Book ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {books.map(el => <BookItem key={el._id} book={el} />)}
            </tbody>
        </table>
    );
}

export default BooksList;