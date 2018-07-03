import express from 'express';

import constants from './config/constants';
import middlewareConfig from './config/middlewares';
import './config/database';
import apiRoutes from './modules';

const app = express();

middlewareConfig(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

apiRoutes(app);

const PORT = constants.PORT;

app.listen(PORT, err => {
    if (err) {
        throw(err);
    } else {
        console.log(`
            Server running on port ${PORT}
            ======================
            Running on ${process.env.NODE_ENV}
        `)
    }
});
