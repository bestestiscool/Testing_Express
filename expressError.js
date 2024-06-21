class ExpressError extends Error {
  constructor(message, status) {
      super();
      this.message = message;
      this.status = status;
      console.error(this.stack);
  }
}

// 404 handler

app.use((req, res, next) => {

  const err = new ExpressError("Not Found", 404);
 
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
 
 
 
 your route would look like this
 
 
 
 
 
 
 
 
 
 
 

module.exports = ExpressError;
