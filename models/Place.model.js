const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    source : {
      type: String,
      enum: ["Movie", "TV Show", "Videogame", "Anime", "Other"],
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true
    },
    author: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  {  
    timestamps: true
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;