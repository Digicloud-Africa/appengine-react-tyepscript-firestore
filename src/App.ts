import {FirestoreStore } from "@google-cloud/connect-firestore";
import {Firestore} from "@google-cloud/firestore";
import * as express from "express";
import * as session from "express-session";
import {Item} from "./routes/item";

class App {

    public express;

    constructor() {
        this.express = express();
        this.express.set("views", __dirname + "/views");
        this.express.set("view engine", "tsx");
        this.express.use(
            session({
                resave: false,
                saveUninitialized: true,
                secret: "my-secret",
                store: new FirestoreStore({
                    dataset: new Firestore({
                        kind: "express-sessions",
                    }),
                }),
            }),
        );
        this.express.engine("tsx", require("express-react-views").createEngine({
            defaultLayout: "index",
        }));
        const itmeRouter = new Item(this.express);

        // this.mountRoutes();
    }

    private mountRoutes(): void {
        const router = express.Router();
        router.get("/", (req, res) => {
            res.json({
                message: "Hello Lies!",
            });
        });
        this.express.use("/", router);
    }
}

export default new App().express;
