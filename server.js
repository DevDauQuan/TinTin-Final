require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const SocketServer = require('./socketServer');
const { PeerServer } = require("peer");



const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true
}))

//socket 
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const users = []

io.on('connection', socket => {
    SocketServer(socket);
});


//peer 
PeerServer({ port: 3001, path: '/' })


// app.get('/', (req, res) => {
//     res.json({ msg: "Hello" });
// })
//router
app.use('/api', require('./routes/authRouter'));
app.use('/api', require('./routes/userRouter'));
app.use('/api', require('./routes/postRouter'));
app.use('/api', require('./routes/commentRouter'));
app.use('/api', require('./routes/notifyRouter'));
app.use('/api', require('./routes/messageRouter'));
app.use('/api', require('./routes/adminRouter'));


const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, err => {
    if (err) throw err;
    console.log('Connected to mongodb');
})

const port = process.env.Port || 5000;
http.listen(port, () => {
    console.log('Server is running on port', port);
})

