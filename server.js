const express = require('express');
const app = express();
const PORT = 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/', htmlRoutes);

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})