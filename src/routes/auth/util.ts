import { google } from "googleapis";
export default class GoogleOAuth {

    public defaultScope = [
        "https://www.googleapis.com/auth/plus.me",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
    ];

    private env = process.env.RUNTIME_ENV ? process.env.RUNTIME_ENV : "prod";

    private auth;

    private secrets = require("../../../auth/secrets.json");

    private googleConfig = {
        clientId: this.secrets.googleConfig.clientId,
        // will look something like "220097495841-33o01nsd0f9vkbtkunk0s4a39nboptii.apps.googleusercontent.com",
        clientSecret: this.secrets.googleConfig.clientSecret, // will look something like "eKBfvHNDTsBKMPUyIxo5wX_8",
        redirect: this.env === "dev" ? "http://localhost:3000/login" : this.secrets.googleConfig.prodEnvUrl + "/login",
        // this must match your google auth api settings
    };

    public urlGoogle() {
        this.auth = this.createConnection(); // this is from previous step
        const url = this.getConnectionUrl(this.auth);
        return url;
    }

    public async getGoogleAccountFromCode(code) {

        // add the tokens to the google api so we have access to the account
        this.auth = this.createConnection();
        // get the auth "tokens" from the request
        const data = await this.auth.getToken(code);

        const tokens = data.tokens;
        this.auth.setCredentials(tokens);

        // connect to google plus - need this to get the user's email
        const plus = this.getGooglePlusApi(this.auth);
        const me = await plus.people.get(
            {
                resourceName: "people/me?personFields=emailAddresses,residences,birthdays",
            });

        // get the google id and email
        const userGoogleId = me.data.resourceName;
        const userGoogleEmail = me.data.emailAddresses
            && me.data.emailAddresses.length
            && me.data.emailAddresses[0].value;

        // return so we can login or sign up the user
        return {
            details: me.data,
            email: userGoogleEmail,
            id: userGoogleId,
            loggedIn: true,
            tokens,
        };
    }

    /**
     * Create the google auth object which gives us access to talk to google's apis.
     */
    private createConnection() {
        console.log("keep at it" + this.googleConfig.redirect + this.env);
        return new google.auth.OAuth2(
            this.googleConfig.clientId,
            this.googleConfig.clientSecret,
            this.googleConfig.redirect,
        );
    }

    private getConnectionUrl(auth) {
        return auth.generateAuthUrl({
            access_type: "offline",
            prompt: "consent",
            scope: this.defaultScope,
        });
    }

    private getGooglePlusApi(auth) {
        // console.log(google.getSupportedAPIs());
        return google.people({ version: "v1", auth });
    }
}
