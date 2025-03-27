import { config } from 'dotenv';
config();
import express from 'express';
import path from 'path';
import { connect } from 'mongoose';
import routes from './routes';
import { Console } from 'console';
import { getAll } from './controllers/users'

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger.config');
const swaggerDocs = swaggerJsDoc(swaggerOptions);


const port = process.env.PORT || 3000;

const app = express();

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('', (req,res) => {
    res.sendFile(path.join(__dirname,'views','index.html'))
});

app.get('/users', (req,res) => {
    getAll(req, res)
});

app.use('/assets', express.static(path.join(__dirname,'assets'))
);

app.use(routes);

app.listen(port, () =>{
    console.log(`app is running in port ${port}`)
})

// const dbUri = process.env.MONGODB_URI
// connect(dbUri as string).then(res => {
//     app.listen(port, () =>{
//         console.log(`app is running in port ${port}`)
//     })
// }).catch(e => {
//     console.log('No sirvo', e)
// })
