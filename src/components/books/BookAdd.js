import React, {useState} from "react";
import bookService from "../../services/bookService";
import {useDispatch} from "react-redux";
import {addBook} from "../../store/bookSlice";
import ImageUpload from "../ImageUpload/ImageUpload";
import TestLoader from "../ImageUpload/TestLoader";


const BookAdd = () => {

    const dispatch = useDispatch();

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
                dispatch(addBook(addedBook));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    return (
        <div className="mx-auto mb-5 w-50">
            <form>
                <div className="mb-3">
                    <label htmlFor="textId1" className="form-label">Enter book title</label>
                    <input type="text" className="form-control bg-light" id="textId1" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="textId2" className="form-label">Enter book Author</label>
                    <input type="text" className="form-control bg-light" id="textId2" value={author} onChange={e => setAuthor(e.target.value)} />
                </div>
                <div className="mb-3">
                    <TestLoader />
                </div>
                <button type="submit" className="btn btn-primary" onClick={submitHandler}>add book</button>
            </form>
        </div>
    );
}

export default BookAdd;