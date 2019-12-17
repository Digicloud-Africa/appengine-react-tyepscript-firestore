const fs = require('fs');

const dotEnvExists = fs.existsSync('.env');

if (dotEnvExists) {
    console.log('loaded local env file.');
} else {

    const {Storage} = require('@google-cloud/storage');
    const storage = new Storage();
    const bucketName = `envvars-${process.env.GCLOUD_PROJECT}`;

    storage
        .bucket(bucketName)
        .file('.env')
        .download({destination: '.env'})
        .then(() => {
            console.log('loaded env file.');
        }).catch(e => {
        console.error(`Failed to load .env file: ${JSON.stringify(e, undefined, 2)}`);
    });
}