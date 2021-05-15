const userHandler = () => {
  const greet = (req, res) => {
    try {
      res.status(200).json({
        status: "success",
        message: "Hello World",
      });
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: err,
      });
    }
  };

  return {
    greet,
  };
};

module.exports = userHandler;
