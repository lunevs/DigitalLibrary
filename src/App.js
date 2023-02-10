import React, {useEffect} from "react";
import BooksList from "./components/books/BooksList";
import BookAdd from "./components/books/BookAdd";
import TopMenu from "./components/utils/TopMenu";
import {useDispatch, useSelector} from "react-redux";
import {loadBooks} from "./store/bookSlice";
import bookService from "./services/bookService";


const App = () => {

    const books = useSelector(state => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        bookService
            .getAll()
            .then(books => dispatch(loadBooks(books)))
    }, [])

  return (
    <div className="App">
        <TopMenu />
        <BookAdd />
        <BooksList />
    </div>
  );
}

export default App;
