const mongoose = require('mongoose');

const printSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users"
    },
    thingy: {
      type: mongoose.Types.ObjectId,
      ref: "thingies"
    },
    printer_model: {
      type: String
    },
    scale: {
      type: Number
    },
    nozzle_size: {
      type: Number,
      enum: [0.2, 0.4, 0.6, 0.8, 1],
      required: [true, "Nozzle Size is required"]
    },
    resolution: {
      type: Number,
      required: [true, "Resolution is required"]
    },
    infill: {
      type: Number,
      required: [true, "infill is required"]
    },
    supports: {
      type: String,
      enum: ["yes", "no"],
      required: [true, "the need for supports is required"]
    },
    rafts: {
      type: String,
      enum: ["yes", "no"],
      required: [true, "the need for rafts is required"]
    },
    filament_material: {
      type: String,
      enum: ["PLA", "PET", "PETG", "ASA", "ABS", "Flex", "Nylon", "Other"]
    },
    temp_nozzle: {
      type: Number,
      required: [true, "A printing temperature is needed"]
    },
    temp_bed: {
      type: Number,
      required: [true, "A bed temperature is needed"]
    },
    comments: {
      type: String
    }
  }
)

const Print = mongoose.model("prints", printSchema);

module.exports = Print;