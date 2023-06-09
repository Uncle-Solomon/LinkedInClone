import User from "../db/models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import createJWT from "../utils/auth.js";

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const signup = (req, res, next) => {
  let { email, password, lastName, otherNames, gender } = req.body;
  let errors = [];

  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (password.length < 6) {
    errors.push({ password: "Not Enough Characters" });
  }
  if (!lastName) {
    errors.push({ lastName: "required" });
  }
  if (!otherNames) {
    errors.push({ otherNames: "required" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  User.findOne({ emailOrPhoneNumber: email })
    .then((user) => {
      if (user) {
        return res
          .status(422)
          .json({ errors: [{ user: "email already exists" }] });
      } else {
        const user = new User({
          emailOrPhoneNumber: email,
          password: password,
          lastName: lastName,
          otherNames: otherNames,
          gender: gender,
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
            user
              .save()
              .then((response) => {
                res.status(200).json({
                  success: true,
                  result: response,
                });
              })
              .catch((err) => {
                res.status(500).json({ errors: [{ error: err }] });
              });
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ error: "Something went wrong, says Solomon" }],
      });
    });
};

export const login = (req, res, next) => {
  let { email, password } = req.body;
  let errors = [];
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid email" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  User.findOne({ emailOrPhoneNumber: email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ errors: [{ user: "not found" }] });
      } else {
        bcrypt
          .compare(password, user.password)
          .then((isMatch) => {
            if (!isMatch) {
              return res
                .status(400)
                .json({ errors: [{ password: "incorrect" }] });
            }
            let access_token = createJWT(user.email, user._id, 3600);
            jwt.verify(
              access_token,
              process.env.TOKEN_SECRET,
              (err, decoded) => {
                if (err) {
                  res.status(500).json({ error: err });
                }
                if (decoded) {
                  return res.status(200).json({
                    success: true,
                    token: access_token,
                    message: user,
                  });
                }
              }
            );
          })
          .catch((err) => {
            res.status(500).json({ errors: err });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ errors: err });
    });
};

export const forgotPassword = (req, res) => {
   let { email, password, confirmPassword } = req.body;
  let errors = [];
  let newPassword = "";

  if (password.length < 6) {
    errors.push({ password: "Not Enough Characters" });
  }
  if (confirmPassword.length < 6) {
    errors.push({ confirmPassword: "Not Enough Characters" });
  }
  if (password != confirmPassword) {
    errors.push({ password: "Passwords do not match" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  User.findOne({ emailOrPhoneNumber: email })
  .then((user)=>{
    if (!user) {
      return res.status(404).json({ errors: [{ user: "not found" }] });
    } else {
      bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            newPassword = hash;
            User.findByIdAndUpdate({ _id: user._id }, {password: newPassword})
            .then((response) => {
              res.status(200).json({success: true, message:response})
            }).catch((err) => {
              res.status(500).json({ errors: [{ error: err }] });
            })
        });
      });
    }
  })
  .catch((err) => {
    res.status(500).json({ errors: [{ error: err }] });
  })


}