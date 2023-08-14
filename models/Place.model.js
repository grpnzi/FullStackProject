const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    author: {
      type: String,
      required: true,
      unique: true
    },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  {  
    timestamps: true
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;
