
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const catalogoRoutes = require("./routes/catalogo.routes.js");


// settings
const app = express();
const PORT = 5000;

app.set("port", PORT);

// Middlewares
app.use(bodyParser.json());

// Routes
app.use("/api/catalogo", catalogoRoutes);

// pagina inicial

app.get("/", function (require, response) {
    response.send("<h3>Pagina inicial de MYSQL</h3>");
});

// pagina secundarias

app.get("/about", function (require, response) {
    response.sendFile("about.html",{
        root: path.join(__dirname, "./views")
    });
});

app.get("/contact", function (require, response) {
    response.sendFile("contact.html",{
        root: path.join(__dirname, "./views")
    });
});

// init server
app.listen(PORT, function () {
    console.log("server running port 5000");
});