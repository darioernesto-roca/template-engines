const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const dir = path.join(__dirname, '../public/img/uploads');
        cb(null, dir);
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

exports.uploadImage = upload.single('image'), (req, res, next) => {
    // Access the uploaded file via req.file
    console.log(req.file);
    
    // Send a response
    res.send('Image uploaded successfully');
    }

exports.uploadImage = (req, res, next) => {
    upload.single('image')(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            return res.status(500).send(err.message);
        } else if (err) {
            // An unknown error occurred when uploading.
            return res.status(500).send(err.message);
        }

        // If this function gets called, everything went fine.
        console.log(req.file); // This should now log to your console
        res.send('Image uploaded successfully'); // And this should send the response
    });
}
    