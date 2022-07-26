export const ErrorHandler = (err, req, res, next) => {
  const defaultError = {
    message: 'Something went wrong.',
    status: 500,
  };

  res.status(err.status || defaultError.status).json({
    success: false,
    msg: err.message || defaultError.message,
  });

  next(err);
};
