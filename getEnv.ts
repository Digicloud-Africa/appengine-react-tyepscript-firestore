import {Storage} from "@google-cloud/storage";

export class GetEnv {
    constructor() {

        const fs = require("fs");
        const dotEnvExists = fs.existsSync(".env");
        const dotenv = require("dotenv");

        if (dotEnvExists) {
            console.log("loaded local env file.");
        } else {
            console
                .log(
                    "loading production env file. "
                );

            const storage = new Storage();

            const bucketName = `envvars-groza-260013`;

            storage
                .bucket(bucketName)
                .file(".env")
                .download({destination: ".env"})
                .then(() => {
                    console.log("loaded remote env file.");
                }).catch((e) => {
                console.error(`Failed to load .env file from bucket envvars-${process.env.GOOGLE_CLOUD_PROJECT} : ${JSON.stringify(e, undefined, 2)}`);
            });
        }
    }
}

const getEnv = new GetEnv();
