const mongoose = require('mongoose');

const thingySchema = new mongoose.Schema (
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users"
    },

    thingiverseId: { //id at thingiverse.com
      type: String,
    },

    title: {
      type: String,
      required: [true, "The thingy needs to have a TITLE"]
    },

    description: {
      type: String
    },

    image: {
      type: String
    },

  }
)

const Thingy = mongoose.model("thingies", thingySchema);

module.exports = Thingy;