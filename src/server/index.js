import express from 'express';
import path from 'path'  //used to extract current directory
import helmet from 'helmet'
import cors from 'cors'
import expressPlayground from "graphql-playground-middleware-express";

import servicesLoader from './services';


const app = express();

import db from './database'
const utils = {
    db,
}
const services = servicesLoader(utils);
const root = path.join(__dirname, '../../');

app.use('/uploads', express.static(path.join(root, 'uploads')));
// app.use(helmet());
// app.use(helmet.contentSecurityPolicy({
//     directives: {
//         defaultSrc: ["'self'"],
//         scriptSrc: ["'self'", "'unsafe-inline'"],
//         styleSrc: ["'self'", "'unsafe-inline'"]
//     }
// }));
// app.use(helmet.referrerPolicy({policy: 'same-origin'}));
app.use(cors())


app.get('/', (req, res) => {
    res.end('Welcome to the DVLA server')
})

const serviceNames = Object.keys(services);

for (let i = 0; i < serviceNames.length; i += 1) {
    const name = serviceNames[i];
    if(name === 'graphql') {
        services[name].applyMiddleware({ app });
    } else {
        app.use(`/${name}`, services[name]);
    }
}

app.get('/playground', expressPlayground({ endpoint: '/graphql'}))
// app.get('/', (req, res) => {
//     res.sendFile(path.join(root, '/build/index.html'));
// });

app.listen(8000, () => console.log('Listening on port 8000'))