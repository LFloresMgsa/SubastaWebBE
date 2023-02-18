
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const catalogoRoutes = require("./routes/catalogo.routes.js");


// settings
const app = express();
const PORT = 5000;

app.set("port", PORT);

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());


// Routes
app.use("/api", catalogoRoutes);

// pagina inicial

app.get("/", function (require, response) {
    response.send("<h3>Pagina inicial de MYSQL</h3>");
});

// init server
app.listen(PORT, function () {
    console.log("server running port 5000");
});