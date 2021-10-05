const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rateSchema = new Schema(
  {
    rate: {
      type: Number,
      require: true,
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    unit: { type: Schema.Types.ObjectId, ref: "unit" },
    qtypackage: {
      type: Number,
    },
    fordealer: {
      type: String,
    },
    rate_manufacturer: {
      type: Number,
    },
    rate_stocklist: {
      type: Number,
    },

    rate_distributer: {
      type: Number,
    },
    rate_dealer: {
      type: Number,
    },
    rate_sp_retailer: {
      type: Number,
    },

    rate_retailer: {
      type: Number,
    },
    rate_builder_contractor: {
      type: Number,
    },
    rate_customer: {
      type: Number,
    },

    //rate_builder_contractor
    // rate_customer
    // rate_dealer
    // rate_distributer
    // rate_manufacturer
    // rate_retailer
    // rate_sp_retailer
    // rate_stocklist
    // rate_supplier
    starting_from: {
      type: Number,
    },
    closing_on: {
      type: Number,
    },
    status: {
      type: String,
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("rate", rateSchema);
