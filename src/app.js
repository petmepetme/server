process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config()
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose'
import cors from 'cors';
import indexRouter from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/v1', indexRouter);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongo petme connected')
});

var mongodUri = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}${process.env.MLAB_URL}`
mongoose.connect(mongodUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


export default app;