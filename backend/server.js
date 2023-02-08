const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const { Schema } = mongoose;

const { MONGODB_URI, PORT } = require('./env_config');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.set('strictQuery', true);
const commentSchemas = new Schema({author: String, text: String, date: String});
const userSchemas = new Schema({name: String, fullName: String, phone: String, booksRead: Number});
const booksSchemas = new Schema({
    title: String,
    author: String,
    commentaries: [commentSchemas],
    status: String,
    isAvailable: Boolean,
    screenshots: [String]
});
const Book = mongoose.model('Book', booksSchemas);
const Comment = mongoose.model('Commentary', commentSchemas);
const User = mongoose.model('Reader', userSchemas);

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Successfully connect to DB')
    })
    .catch(error => {
        console.error('Can not connect to DB:', error.message)
    })


app.get("/books", (req, res) => {
    console.log(req.rawHeaders);
    Book.find({}, (error, result) => {
        if (error) {
            res.send(error);
        } else {
            console.log(result);
            res.send(result);
        }
    })
});

app.get("/book/:id", (req, res) => {
    const id = req.params.id;
    Book.findById(id, (error, foundUser) => {
        if (error) {
            res.send(error);
        } else {
            res.send(foundUser);
        }
    })
});

app.post("/book", (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        commentaries: [],
        status: req.body.status,
        isAvailable: true,
        screenshots: []
    });
    Book.findOne({title: req.body.title}, (error, foundBook) => {
        if (foundBook) {
            res.send("Book already exists");
        } else if (error) {
            res.send(error);
        } else {
            newBook.save(() => {
                res.send(newBook);
            })
        }
    })
});

app.put("/", () => {
    return null;
});

app.patch("/", () => {
    return null;
});

app.delete("/", () => {
    return null;
});

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)
})