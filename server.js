const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const routes = require('./router/routes');
const authRoutes = require('./router/authRoutes');

const PORT = process.env.PORT || 3000;
const publicDirectory = path.join(__dirname, './public');

const app = express();
app.use(cookieParser());
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.use(routes);
app.use(authRoutes);

app.listen(PORT, () => {
    if(process.env.PORT) {
        console.log('App started on http://localhost:' + process.env.PORT);
    }
    else {
        console.log('App started on http://localhost:' + PORT);
    }
});
