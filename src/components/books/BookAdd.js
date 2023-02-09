import React, {useState} from "react";
import bookService from "../services/bookService";


const BookAdd = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        const newBook = {
            title: title,
            author: author,
            status: 'new',
            commentaries: [],
            isAvailable: true,
            screenshots: []
        };
        bookService
            .create(newBook)
            .then(addedBook => {
                console.log(JSON.stringify(addedBook));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    return (
        <form method='post'>
            <input type='text' placeholder='Enter book title' value={title} onChange={e => setTitle(e.target.value)} />
            <input type='text' placeholder='Enter book Author' value={author} onChange={e => setAuthor(e.target.value)} />
            <button type='submit' onClick={submitHandler}>add book</button>
        </form>
    );
}

export default BookAdd;