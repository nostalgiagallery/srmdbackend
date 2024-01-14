const mongoose = require("mongoose");
const { Schema } = mongoose;

const DataSchema = new Schema({
  question: { type: String, required: true },
  time: { type: String, required: true },
  imageLink: { type: String, required: true },
  status: { type: String, required: true },
  formid: { type: String, required: true },
  ArrivalDate: { type: String, required: true },
  DepartureDate: { type: String, required: true },
});

const virtual = DataSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
DataSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, res) {
    delete res._id;
  },
});

exports.Data = mongoose.model("Datas", DataSchema);
