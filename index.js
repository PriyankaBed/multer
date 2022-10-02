const express = require("express");
const { errorHandler } = require("./middelwares/errorHandler");
const { upload } = require("./middelwares/uploadFile");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static("uploads"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/upload-profile-pic", upload.single("profile_pic"), (req, res) => {
    // i can access the file from req.file
    console.log(req.file);
    res.send(
        `<h2>Here is the picture:</h2>
    <img src="http://localhost:3001/${req.file.filename}" alt=”something”/>`
    );
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
