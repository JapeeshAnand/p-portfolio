
const express = require('express');
const app = express();
const path = require('path');




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.render('main')
})

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`LISTENING ON PORT ${port}!`);
})