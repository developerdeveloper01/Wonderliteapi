const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema(
  {
    //   staffID: {
    //     type: String,
    //     require: true,
    //   },
    // first_name: {
    //   type: String,
    //   require: true,
    // },
    last_name: {
      type: String,
      require: true,
    },
    staff_email: {
      type: String,
      require: true,
    },

    password: {
      type: String,
      require: true,
    },
    mobile_no: {
      type: String,
      require: true,
    },
    sortorder: {
      type: Number,
    },
    status: {
      type: String,
      default: "Active",
    },
    role: {
      type: String,
      default: "EM",
    },
    //roles
    //EM Employee
    //AA Account Manager
    //
  },
  { timestamps: true }
);

module.exports = mongoose.model("staff", staffSchema);
