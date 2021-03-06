const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");

const { addcategory, viewall_cat } = require("../controller/blog_category");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //console.log(file);
    let path = `./uploadesimages`;
    if (!fs.existsSync("uploadesimages")) {
      fs.mkdirSync("uploadesimages");
    }
    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.includes("jpeg") ||
    file.mimetype.includes("png") ||
    file.mimetype.includes("jpg")
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let uploads = multer({ storage: storage });

router.post("/admin/addblog_cat", uploads.single("cat_img"), addcategory);
router.get("/admin/viewall_cat", viewall_cat);

module.exports = router;
