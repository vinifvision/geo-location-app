const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    // Armazena a imagem em base64 (data URI) de forma simples.
    photo: { type: String, default: null },
    laboratorio: String,
    dataHora: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Place", PlaceSchema);
