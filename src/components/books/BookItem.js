import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const BookItem = ({ book }) => {

    return (
        <tr>
            <td>{book._id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.status}</td>
            <td><FontAwesomeIcon icon={faTrash} size="xs" /></td>
        </tr>
    );
}

export default BookItem;