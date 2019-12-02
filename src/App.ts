import * as express from 'express';
import * as itemRouter from './routes/item';

class App {
    public express;

    constructor () {
        this.express = express();
        this.express.set('views', __dirname + '/views');
        this.express.set('view engine', 'tsx');
        this.express.engine('tsx', require('express-react-views').createEngine());
        itemRouter.register(this.express);

        //this.mountRoutes();
    }

    private mountRoutes (): void {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello Lies!'
            })
        });
        this.express.use('/', router);
    }
}

export default new App().express