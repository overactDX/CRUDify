exports.hello = async (req, res) => {
    try {
      res.send('hello data');
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
    }
  };
  