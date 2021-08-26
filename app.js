const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//require
const productcategory = require("./routes/productcategory");
const productsubcategory = require("./routes/productsubcategory");
const staff = require("./routes/staff");
const gst_rate = require("./routes/gst_rate");
const units = require("./routes/unit");
const user = require("./routes/user");
const enquiry = require("./routes/enquiry");
const required = require("./routes/required");
const rate = require("./routes/rate");
const altunit = require("./routes/altunit");
const brand = require("./routes/brand");
const product = require("./routes/product");
const aboutus = require("./routes/aboutus");
const feedback = require("./routes/feedback");
const flashsale = require("./routes/flashsale");
const bundleoffer = require("./routes/bundleoffer");
const cart = require("./routes/cart");
const companyfeedback = require("./routes/companyfeedback");
const buyonegetone = require("./routes/buyonegetone");
const bannerimage = require("./routes/banner_img");
const stock_clearance = require("./routes/stock_clearance");
//const productsummery = require("./routes/productsummery");
const dealofthe_day = require("./routes/dealofthe_day");
const orderproduct = require("./routes/orderproduct");
const contact_us = require("./routes/contact_us");
const buy_xget_y = require("./routes/buy_xget_y");
const servicerequest = require("./routes/servicerequest");
const offeranddeals = require("./routes/offeranddeals");
const blog_news = require("./routes/blog_news");
const careerform = require("./routes/careerform");
const blog_category = require("./routes/blog_category");
const blog = require("./routes/blog");
const blog_comment = require("./routes/blog_comment");
const privacypolicy = require("./routes/privacypolicy");
const termsandcondition = require("./routes/termsandcondition");
const videoslideshow = require("./routes/videoslideshow");
const newlaunch = require("./routes/newlaunch");
//Use
app.use("/api", productcategory);
app.use("/api", productsubcategory);
app.use("/api", staff);
app.use("/api", gst_rate);
app.use("/api/", units);
app.use("/api", user);
app.use("/api", enquiry);
app.use("/api", required);
app.use("/api", rate);
app.use("/api", altunit);
app.use("/api", brand);
app.use("/api", product);
app.use("/api", aboutus);
app.use("/api", feedback);
app.use("/api", flashsale);
app.use("/api", companyfeedback);
app.use("/api", bundleoffer);
app.use("/api", buyonegetone);
app.use("/api", stock_clearance);
app.use("/api", bannerimage);
app.use("/api", cart);
app.use("/api", dealofthe_day);
app.use("/api", orderproduct);
app.use("/api", contact_us);
app.use("/api", buy_xget_y);
app.use("/api", servicerequest);
app.use("/api", offeranddeals);
app.use("/api", blog_news);
app.use("/api", careerform);
app.use("/api", blog_category);
app.use("/api", blog);
app.use("/api", blog_comment);
app.use("/api", privacypolicy);
app.use("/api", termsandcondition);
app.use("/api", videoslideshow);
app.use("/api", newlaunch);

//app.use("/api", productsummery);

/*app.use("/upload-images", upload.single(image), async (req, res) => {
  const uploader = async (path) => await cloudinary.uploads(path, "images");
  if (req.method === "POST") {
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    res.status(200).json({
      msg: "image upload successfully",
      data: urls,
    });
  } else {
    res.status(400).json({
      err: "image not uploaded",
    });
  }
});
*/
app.get("/api", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB CONNECTED SUCCEFULLY");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT || 4444, () => {
  console.log("Example app listening on port 4444!");
});
