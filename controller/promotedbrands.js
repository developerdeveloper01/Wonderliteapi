const Promotedbrand = require("../models/promotedbrands");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.addpromotedbrand = async (req, res) => {
  const { promotion_title, brand, promotion_img } = req.body;

  const newPromotedbrand = new Promotedbrand({
    promotion_title: promotion_title,
    brand: brand,
    promotion_img: promotion_img,
  });

  //   if (req.file) {
  //     const findexist = await Promotedbrand.findOne({
  //       promotion_title: promotion_title,
  //     });
  //     if (findexist) {
  //       res.status(400).json({
  //         status: false,
  //         msg: "Already Exists",
  //         data: {},
  //       });
  //     } else {
  //       if (res) {
  //         newPromotedbrand.promotion_img = res.secure_url;
  //         fs.unlinkSync(req.file.path);
  //         newPromotedbrand.save().then(
  //           res.status(200).json({
  //             status: true,
  //             msg: "success",
  //             data: newPromotedbrand,
  //           })
  //         );
  //       } else {
  //         res.status(200).json({
  //           status: false,
  //           msg: "img not uploaded",
  //         });
  //       }
  //     }
  //   } else {
  //     const findexist = await Promotedbrand.findOne({
  //       promotion_title: promotion_title,
  //     });
  //     if (findexist) {
  //       res.status(400).json({
  //         status: false,
  //         msg: "Already Exists",
  //         data: {},
  //       });
  //     } else {
  //       newPromotedbrand
  //         .save()
  //         .then(
  //           res.status(200).json({
  //             status: true,
  //             msg: "success",
  //             data: newPromotedbrand,
  //           })
  //         )
  //         .catch((error) => {
  //           res.status(400).json({
  //             status: false,
  //             msg: "error",
  //             error: error,
  //           });
  //         });
  //     }
  //   }
  // };

  if (req.file) {
    const findexist = await Promotedbrand.findOne({
      promotion_title: promotion_title,
    });
    if (findexist) {
      res.status(400).json({
        status: false,
        msg: "Already Exists",
        data: {},
      });
    } else {
      //console.log(req.file);
      const resp = await cloudinary.uploader.upload(req.file.path);
      if (resp) {
        newPromotedbrand.promotion_img = resp.secure_url;
        fs.unlinkSync(req.file.path);
        newPromotedbrand.save().then(
          res.status(200).json({
            status: true,
            msg: "success",
            data: newPromotedbrand,
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
    const findexist = await Promotedbrand.findOne({
      promotion_title: promotion_title,
    });
    if (findexist) {
      res.status(400).json({
        status: false,
        msg: "Already Exists",
        data: {},
      });
    } else {
      newPromotedbrand
        .save()
        .then(
          res.status(200).json({
            status: true,
            msg: "success",
            data: newPromotedbrand,
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

exports.editpromotion = async (req, res) => {
  const findandUpdateEntry = await Promotedbrand.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  );
  //.populate("product");
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

exports.allpromotedbrand = async (req, res) => {
  const findall = await Promotedbrand.find().sort({ sortorder: 1 });

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

exports.delpromotedbrand = async (req, res) => {
  try {
    const deleteentry = await Promotedbrand.deleteOne({
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

exports.viewonepromotedbrand = async (req, res) => {
  const findone = await Altunit.findOne({ _id: req.params.id });
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
