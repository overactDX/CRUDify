exports.read = async (req, res) => {
  try {
    res.send("Hello Read");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.list = async (req, res) => {
  try {
    res.send("Hello List");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.create = async (req, res) => {
  try {
    res.send("Hello Create !!!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.update = async (req, res) => {
  try {
    res.send("Hello update");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.remove = async (req, res) => {
  try {
    res.send("Hello remove");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
