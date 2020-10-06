require('dotenv').config();

// const server = require('./api/server.js');

const app = require('./server.js')

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
})

// server.listen(PORT, () => {
//     console.log(`server started on ${PORT}`);
// });