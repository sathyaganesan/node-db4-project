const express = require("express");
const helmet = require("helmet");

const recipeRoute = require("./routers/recipe");
const ingredientsRouter = require("./routers/ingredients");

const server = express();
const port = process.env.PORT || 5000

server.use(helmet());
server.use(express.json());

server.use(recipeRoute);
server.use(ingredientsRouter);

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        Message: "Something went wrong",
    })
});

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
});