import config from './config';
import apiRouter from './api';

import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import express from 'express';
const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');
//server.set('views', path.join(__dirname, 'views'));

import serverRender from './serverRender';

server.get('/', (req, res) => {
    serverRender()
    .then(( { initialMarkup, initialData } ) => {
        res.render('index', {
            initialMarkup,
            initialData
        });
    })
    .catch(console.error);

});

server.use('/api', apiRouter);
server.use(express.static('public'));

//import fs from 'fs';
// server.get('/about.html', (req, res) => {
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString());
//     });
// });

server.listen(config.port, config.host, () => {
    console.info('Express listening on port ', config.port);
});