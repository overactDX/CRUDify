const User = require("../Model/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, password } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).send("User Already Exists !!!");
    }
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create a new user
    const newUser = new User({ name, password: hashedPassword });
    await newUser.save();
    res.send("Register Success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.login = async (req, res) => {
  try {
    //1.CheckUser
    const { name, password } = req.body;
    var user = await User.findOneAndUpdate({ name }, { new: true });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send("Password Invalid !!");
      }
      //2.Payload
      var payload = {
        user: {
          name: user.name,
        },
      };
    //3.generateToken
      jwt.sign(payload, "jwtsecret", { expiresIn: 3000 }, (err, token) => {
        if (err) throw err;
        res.json({ token, payload });
      });
    } else {
      return res.status(400).send('User not found !!!')
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
