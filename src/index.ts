import app from "./App";

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    require("dotenv").config();
    return console.log(`server is listening on ${port}`);
});
