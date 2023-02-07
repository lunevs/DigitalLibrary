const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const { MONGODB_URI, PORT } = require('./env_config');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

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


app.get("/book", (req, res) => {
    Book.find({}, (result, error) => {
        if (error) {
            console.log(error);
        } else {
            res.send(result);
        }
    })
});

app.get("/book/:id", (req, res) => {
    const id = req.params.id;
    Book.findById({id}, (result, error) => {
        if (error) {
            console.log(error);
        } else {
            res.send(result);
        }
    })
});

app.post("/", () => {
    return null;
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