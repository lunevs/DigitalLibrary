import React, {useState} from "react";
import axios from "axios";
import qs from 'qs';


const BookAdd = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        const newBook = qs.stringify({
            title: title,
            author: author,
            status: 'new',
            commentaries: [],
            isAvailable: true,
            screenshots: []
        });
        axios
            .post(
                'http://localhost:3003/book',
                newBook,
                {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            .then((response) => {
                console.log(JSON.stringify(response.data));
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