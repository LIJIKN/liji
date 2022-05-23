const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://liji:liji123@cluster0.n8yaa.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;