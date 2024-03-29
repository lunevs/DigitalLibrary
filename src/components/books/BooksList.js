import React from "react";
import BookItem from "./BookItem";
import {useSelector} from "react-redux";

const BooksList = () => {


    const books = useSelector(state => state.books);
    // sdfs sdf sdf s
    return (
        <div className="container">
            <h1>Books List</h1>
            <table className="table">
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
        </div>
    );
}

export default BooksList;