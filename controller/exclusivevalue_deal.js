const Exclusivevalue_deal = require("../models/exclusivevalue_deal");

const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.add_exclusivevaluedeal = async (req, res) => {
  const {
    exclusivedeal_title,
    product,
    product_price,
    product_img,
    description,
    sortorder,
    status,
  } = req.body;

  const newExclusivevalue_deal = new Exclusivevalue_deal({
    exclusivedeal_title: exclusivedeal_title,
    product: product,
    product_price: product_price,
    product_img: product_img,
    description: description,
    sortorder: sortorder,
    status: status,
  });

  if (req.file) {
    const findexist = await Exclusivevalue_deal.findOne({
      exclusivedeal_title: exclusivedeal_title,
    });
    if (findexist) {
      res.status(400).json({
        status: false,
        msg: "Already Exists",
        data: {},
      });
    } else {
      const resp = await cloudinary.uploader.upload(req.file.path);
      if (resp) {
        newExclusivevalue_deal.product_img = resp.secure_url;
        fs.unlinkSync(req.file.path);
        newExclusivevalue_deal.save().then(
          res.status(200).json({
            status: true,
            msg: "success",
            data: newExclusivevalue_deal,
          })
        );
      } else {
        res.status(200).json({
          status: false,
          msg: "img not uploaded",
        });
      }
    }
  } else {
    const findexist = await Exclusivevalue_deal.findOne({
      exclusivedeal_title: exclusivedeal_title,
    });
    if (findexist) {
      res.status(400).json({
        status: false,
        msg: "Already Exists",
        data: {},
      });
    } else {
      newExclusivevalue_deal
        .save()
        .then(
          res.status(200).json({
            status: true,
            msg: "success",
            data: newExclusivevalue_deal,
          })
        )
        .catch((error) => {
          res.status(400).json({
            status: false,
            msg: "error",
            error: error,
          });
        });
    }
  }
};
exports.allexclusive_deal = async (req, res) => {
  const findall = await Exclusivevalue_deal.find().sort({ sortorder: 1 });
  if (findall) {
    res.status(200).json({
      status: true,
      msg: "success",
      data: findall,
    });
  } else {
    res.status(400).json({
      status: false,
      msg: "error",
      error: "error",
    });
  }
};

exports.oneexclusive_deal = async (req, res) => {
  const findone = await Exclusivevalue_deal.findOne({ _id: req.params.id });

  if (findone) {
    res.status(200).json({
      status: true,
      msg: "success",
      data: findone,
    });
  } else {
    res.status(400).json({
      status: false,
      msg: "error",
      error: "error",
    });
  }
};

exports.del_exclusivedeal = async (req, res) => {
  try {
    const deleteentry = await Exclusivevalue_deal.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json({
      status: true,
      msg: "success",
      data: deleteentry,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      msg: "error",
      error: error,
    });
  }
};

exports.edit_exclusivedeal = async (req, res) => {
  const findandUpdateEntry = await Exclusivevalue_deal.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  );
  if (findandUpdateEntry) {
    res.status(200).json({
      status: true,
      msg: "success",
      data: findandUpdateEntry,
    });
  } else {
    res.status(400).json({
      status: false,
      msg: "error",
      error: "error",
    });
  }
};