// const Rate = require("../models/rate");
// const User = require("../models/user");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const jwt = require("jsonwebtoken");

// exports.addrate = async (req, res) => {
//   const {
//     rate,
//     unit,
//     qtypackage,
//     fordealer,
//     rate_manufacturer,
//     rate_stocklist,
//     rate_distributer,
//     rate_dealer,
//     rate_sp_retailer,
//     rate_retailer,
//     rate_builder_contractor,
//     rate_customer,
//     starting_from,
//     closing_on,
//     sortorder,
//     status,
//   } = req.body;

//   const newRate = new Rate({
//     rate: rate,
//     unit: unit,
//     qtypackage: qtypackage,
//     fordealer: fordealer,
//     rate_manufacturer: rate_manufacturer,
//     rate_stocklist: rate_stocklist,
//     rate_distributer: rate_distributer,
//     rate_dealer: rate_dealer,
//     rate_sp_retailer: rate_sp_retailer,
//     rate_retailer: rate_retailer,
//     rate_builder_contractor: rate_builder_contractor,
//     rate_customer: rate_customer,
//     starting_from: starting_from,
//     closing_on: closing_on,
//     status: status,
//   });

//   const findexist = await Rate.findOne({
//     $and: [
//       { rate: rate },
//       { qtypackage: qtypackage },
//       { fordealer: fordealer },
//     ],
//   });
//   if (findexist) {
//     res.status(400).json({
//       status: false,
//       msg: "Already Exists",
//       data: {},
//     });
//   } else {
//     newRate
//       .save()
//       .then((data) => {
//         res.status(200).json({
//           status: true,
//           msg: "success",
//           data: data,
//         });
//       })
//       .catch((error) => {
//         res.status(400).json({
//           status: false,
//           msg: "error",
//           error: error,
//         });
//       });
//   }
// };

// exports.editrate = async (req, res) => {
//   const findandUpdateEntry = await Rate.findOneAndUpdate(
//     {
//       _id: req.params.id,
//     },
//     { $set: req.body },
//     { new: true }
//   ).populate("unit");
//   if (findandUpdateEntry) {
//     res.status(200).json({
//       status: true,
//       msg: "success",
//       data: findandUpdateEntry,
//     });
//   } else {
//     res.status(400).json({
//       status: false,
//       msg: "error",
//       error: "error",
//     });
//   }
// };

// exports.viewonerate = async (req, res) => {
//   const findone = await Rate.findOne({ _id: req.params.id });
//   if (findone) {
//     res.status(200).json({
//       status: true,
//       msg: "success",
//       data: findone,
//     });
//   } else {
//     res.status(400).json({
//       status: false,
//       msg: "error",
//       error: "error",
//     });
//   }
// };

// exports.gettyperate = async (req, res) => {
//   const findone = await User.findOne({ _id: req.userId });
//   if (findone) {
//     const getusertype = findone.usertype;

//     // const rate = await Rate.findOne(_id: findone.rate)

//     res.status(200).json({
//       status: true,
//       msg: "success",
//       data: findone,
//     });
//   } else {
//     res.status(400).json({
//       status: false,
//       msg: "error",
//       error: "error",
//     });
//   }
// };

// exports.allrate = async (req, res) => {
//   const findall = await Rate.find().sort({ sortorder: 1 }).populate("unit");
//   if (findall) {
//     res.status(200).json({
//       status: true,
//       msg: "success",
//       data: findall,
//     });
//   } else {
//     res.status(400).json({
//       status: false,
//       msg: "error",
//       error: "error",
//     });
//   }
// };

// exports.deleterate = async (req, res) => {
//   try {
//     const deleteentry = await Rate.deleteOne({ _id: req.params.id });
//     res.status(200).json({
//       status: true,
//       msg: "success",
//       data: deleteentry,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: false,
//       msg: "error",
//       error: error,
//     });
//   }
// };
