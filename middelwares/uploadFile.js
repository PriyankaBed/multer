const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        const fileName = `${file.fieldname}-${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    },
});

function fileFilter(req, file, cb) {
    const allowed = ["image/jpeg"];

    if (!allowed.includes(file.mimetype)) {
        return cb(new Error("file format not supported"));
    }

    cb(null, true);
}

const upload = multer({ storage, fileFilter });

module.exports = {
    upload,
};
