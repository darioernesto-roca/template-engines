const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

exports.uploadImage = (req, res, next) => {
  upload.single("image")(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).send(err.message);
    } else if (err) {
      return res.status(500).send(err.message);
    }

    console.log(req.file);
    res.send("Image uploaded successfully");
  });
};
