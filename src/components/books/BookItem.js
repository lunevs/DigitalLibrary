import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {deleteBook} from "../../store/bookSlice";
import bookService from "../../services/bookService";
import {Link} from "react-router-dom";

const BookItem = ({ book }) => {

    const dispatch = useDispatch();
    const handleDeleteBook = (bookId) => {
        bookService
            .remove(bookId)
            .then(() => dispatch(deleteBook(bookId)))
    }

    return (
        <tr>
            <td><Link to={`/book/${book._id}`}>{book._id}</Link></td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.status}</td>
            <td className="deleteLink"><FontAwesomeIcon icon={faTrash} size="xs" onClick={() => handleDeleteBook(book._id)} /></td>
        </tr>
    );
}

export default BookItem;