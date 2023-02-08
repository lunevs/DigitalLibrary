import React, {useEffect, useState} from "react";
import axios from "axios";
import BooksList from "./components/books/BooksList";



const App = () => {

    const [books, setBooks] = useState([]);
    const [tmp, setTmp] = useState("");

    useEffect(() => {
        console.log('get books');
        axios
            .get('http://localhost:3003/books')
            .then(response => {
                console.log(response);
                setTmp(JSON.stringify(response.data, null, 2));
                setBooks(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

  return (
    <div className="App">
        <header className="App-header">
            <p>Hello</p>
            <pre>{tmp}</pre>
        </header>
        <BooksList books={books} />
    </div>
  );
}

export default App;
