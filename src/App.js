import React, {useEffect} from "react";
import BooksList from "./components/books/BooksList";
import BookAdd from "./components/books/BookAdd";
import TopMenu from "./components/utils/TopMenu";
import {useDispatch} from "react-redux";
import {loadBooks} from "./store/bookSlice";
import bookService from "./services/bookService";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BookDetails from "./components/books/BookDetails";

const App = () => {

    //const books = useSelector(state => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        bookService
            .getAll()
            .then(books => dispatch(loadBooks(books)))

        // eslint-disable-next-line
    }, [])

  return (
      <div className="container">
          <BrowserRouter>
              <TopMenu />

              <Routes>
                  <Route path={`/books/`} element={<BooksList />} />
                  <Route path={`/book_add/`} element={<BookAdd />} />
                  <Route path={`/book/:id`} element={<BookDetails />} />
              </Routes>

          </BrowserRouter>
      </div>
  );
}

export default App;
