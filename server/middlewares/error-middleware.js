const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Error occured from server";
  const errorDetails = err.errorDetails || "Error occured from server";

  return res.status(status).json({
    message,
    errorDetails,
  });
};

module.exports = errorMiddleware
