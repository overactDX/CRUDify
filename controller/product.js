const Production = require("../Model/Product");

exports.read = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Production.findOne({ _id: id }).exec();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.list = async (req, res) => {
  try {
    const data = await Production.find({}).exec();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.create = async (req, res) => {
  try {
    const data = await Production(req.body).save();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await Production.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();
    res.send(updated);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const removed = await Production.findOneAndDelete({ _id: id }).exec();
    res.send(removed);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
