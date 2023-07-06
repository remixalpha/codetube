export const indexController = async (req, res, next) => {
  try {
    res.status(200).json({ status: true, msg: "HI" });
  } catch (err) {
    next(err);
  }
};

export const testController = async (req, res, next) => {
  try {
    res.send("<html> <body><h1> Hi Dev &#128526; </h1></body></html>");
  } catch (err) {
    next(err);
  }
};
