const fs = require("fs");
const path = require("path");

// Adjusted to point to where the 'images' directory is located
const imagesDir = path.join(__dirname, "images");
const outputFile = path.join(__dirname, "imageList.js");

fs.readdir(imagesDir, (err, files) => {
    if (err) {
        console.error("Failed to list images:", err);
        return;
    }

    // Ensuring paths are correctly formatted for web use
    const imagePaths = files
        .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
        .map(file => `"images/${file}"`);

    // Constructing the module export string
    const outputContent = `const imageList = [${imagePaths.join(", ")}];\nexport default imageList;`;

    fs.writeFile(outputFile, outputContent, err => {
        if (err) {
            console.error("Failed to write image list:", err);
            return;
        }
        console.log("Image list generated successfully!");
    });
});
