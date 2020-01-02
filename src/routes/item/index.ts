import {Firestore, Timestamp} from "@google-cloud/firestore";
import * as express from "express";
import GoogleOAuth from "../auth/util";

export class Item {

    private firestore = new Firestore();

    private app: express.Application;

    constructor( app: express.Application ) {
        this.app = app;

        // define a route handler for the default home page
        app.get("/", (req: any, res) => {
            // this.quickstart();
            console.log(req.session);
            res.render("index", {
                category: "asvasd",
                description: "dfvsd",
                loggedIn: req.session.user ? req.session.user.loggedIn : false,
                price: 80,
            });
        });

        // create session once oauth granted
        app.get("/login", (req: any, res) => {
            if (req.query.code) {
                console.log(req.query.code);
                const auth = new GoogleOAuth();
                auth.getGoogleAccountFromCode(req.query.code).then((user) => {
                    console.log("this is the reply" + user);
                    const document = this.firestore.collection("users").doc(user.email);
                    document.set({
                        createDate: Timestamp.fromDate(new Date()),
                        googleUserDetails: user.details,
                    });
                    req.session.user = user;
                    res.redirect("/");
                }).catch((err) => {
                    console.log(err);
                    res.redirect("/");
                });
            } else {
                console.log(req.path);
                res.redirect("/");
            }
        });

        // define a route to handle logout
        app.get("/logout", (req: any, res) => {
            req.logout();
            res.redirect("/");
        });

        // define a secure route handler for the guitars page
        app.get("/guitars", (req: any, res) => {
            res.render("guitars");
        });
    }

    public async quickstart() {
        // Obtain a document reference.
        const document = this.firestore.doc("posts/intro-to-firestore");

        // Enter new data into the document.
        await document.set({
            body: "Hello World",
            title: "Welcome to Firestore",
        });
        console.log("Entered new data into the document");

        // Update an existing document.
        await document.update({
            body: "My first Firestore app",
        });
        console.log("Updated an existing document");

        // Read the document.
        const doc = await document.get();
        console.log("Read the document");

        // Delete the document.
        await document.delete();
        console.log("Deleted the document");
    }

}
