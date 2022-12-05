const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const usersRoute = require("./routes/usersRoute");
const authRoute = require("./routes/authRoute");
const questionsRoute = require("./routes/questionsRoute");
const commentsRoute = require("./routes/commentsRoute");
const answersRoute = require("./routes/answersRoute");

const main = async () => {

    dotenv.config();

    // Connecting to mongoDb Atlas
    mongoose.connect(process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    const app = express();

    // Middlewares
    app.use(cors());

    app.use(express.json());
    app.use(helmet());
    app.use(morgan("common"));

    app.use("/auth", authRoute);

    app.use("/users", usersRoute);

    app.use("/questions", questionsRoute);

    app.use("/comments", commentsRoute);

    app.use("/answers", answersRoute);

    app.listen(process.env.PORT);
}

main();