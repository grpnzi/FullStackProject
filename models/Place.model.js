const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
    },
    source : {
      type: String,
      enum: ["Movie", "TV Show", "Videogame", "Anime", "Other"],
      required: [true, 'Source is required.'],
    },
    title: {
      type: String,
      required: [true, 'Title is required.'],
    },
    location: {
      type: String,
      required: [true, 'Location is required.'],
    },
    description: {
      type: String,
      required: [true, 'Description is required.'],
    },
    img: {
      type: String,
      required: [true, 'Image is required.'],
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