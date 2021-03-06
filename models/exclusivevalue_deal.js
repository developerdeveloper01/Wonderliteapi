const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exclusivevaluedealSchema = new mongoose.Schema(
  {
    exclusivedeal_title: {
      type: String,
      require: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "product",
      require: true,
    },
    product_price: {
      type: Number,
    },
    dealer: {
      type: Number,
    },
    manufacturer: {
      type: Number,
    },
    stocklist: {
      type: Number,
    },
    distributer: {
      type: Number,
    },
    sretailer: {
      type: Number,
    },
    rate_retailer: {
      type: Number,
    },
    rate_builder_contractor: {
      type: Number,
    },
    customer: {
      type: Number,
    },
    product_qty: {
      type: Number,
    },
    product_img: {
      type: String,
    },
    description: {
      type: String,
    },
    sortorder: {
      type: Number,
    },
    status: {
      type: String,
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "exclusivevalue_deal",
  exclusivevaluedealSchema
);
