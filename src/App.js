import React, {useEffect, useState} from "react";
import BooksList from "./components/books/BooksList";
import BookAdd from "./components/books/BookAdd";
import bookService from "./services/bookService";
import TopMenu from "./components/utils/TopMenu";


const App = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService
            .getAll()
            .then(booksList => setBooks(booksList))
            .catch(error => console.error(error))
    }, [])

  return (
    <div className="App">
        <TopMenu />
        <header className="App-header">
            <p>Hello</p>
        </header>
        <BookAdd />
        <BooksList books={books} />
    </div>
  );
}

export default App;
