

const express = require("express");
const app = express();
const ExpressError = require("./expressError");

// Parse request bodies for JSON
app.use(express.json());

const uRoutes = require("./routes/users");
app.use("/users", uRoutes);

/** 404 handler */
app.use(function(req, res, next) {
    const err = new ExpressError("Not Found", 404);

    // pass err to the next middleware
    return next(err);
});



// General error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({
      error: err.message,
      status: err.status
    });
});
  


module.exports = app
