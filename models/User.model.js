const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username is required.'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: [true, 'Country is required.'],
    },
    img: {
      type: String,
      required: [true, 'Image is required.'],
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
