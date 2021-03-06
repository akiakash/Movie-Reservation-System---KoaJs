const router = require("express").Router();
const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../model/MovieAdmin");
const {
  registerValidation,
  loginValidation,
  ForgotPasswordValidation,
} = require("../Validation/validation_movie_admin");
const jwt = require("jsonwebtoken");

//Register
router.post(`/register`, async (req, res) => {
  //Lets validate the data beofre we a user
  const { error } = registerValidation(req.body);
  if (error)
    return res.status(400).json({ error_Message: error.details[0].message });

  //Checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(400).json({ error_Message: "Email already exists" });

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
    companyName: req.body.companyName,
    url: req.body.url,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  //Lets validate the data beofre we a user
  const { error } = loginValidation(req.body);
  // const errorMessage = res.json({ error_Message: error.details[0].message });
  if (error)
    return res.status(400).json({ error_Message: error.details[0].message });

  //Checking if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).json({ error_Message: "Email is not found" });

  //Password is Correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass)
    return res.status(400).json({ error_Message: "Invalid Password" });

  //Create and assing a token
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      companyName: user.companyName,
      url: user.url,
    },
    process.env.TOKEN_SECRET
  );
  //   res.header("auth-token", token).send(token);
  res.header("auth-token", token).json({
    token: token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      companyName: user.companyName,
      url: user.url,
    },
  });
});

//Forget Password
router.patch("/forget-password", async (req, res) => {
  //Lets validate the data beofre we a user
  const { error } = ForgotPasswordValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res
      .status(400)
      .send(res.json({ error_Message: "Email is not found" }));

  //Password is Correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (validPass)
    return res
      .status(400)
      .send(res.json({ error_Message: "Please Enter a New Password!" }));

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const UpdatePassword = await User.updateOne({
    $set: {
      password: hashPassword,
    },
  });
  res.json(UpdatePassword);
});

//GET ALL THE Registered Users
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    // res.json({ data: user });
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
