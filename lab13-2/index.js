const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const additionRoutes = require('./routes/addition_routes');
const subtractionRoutes = require('./routes/subtraction_routes');
const multiplicationRoutes = require('./routes/multiplication_routes');
const divisionRoutes = require('./routes/division_routes');
const { endpointNotFoundError, errorHandler } = require("./utils/error_handler.middleware");

app.use("/addition", additionRoutes);
app.use("/subtraction", subtractionRoutes);
app.use("/multiplication", multiplicationRoutes);
app.use("/division", divisionRoutes);

app.use("*", endpointNotFoundError);

app.use(errorHandler);

app.listen(3000);