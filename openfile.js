const fs = require("fs");

let lipsumText;

fs.readFile("lipsum.txt", "utf8", function (err, lipsumTextPayload) {
    lipsumText = lipsumTextPayload
    console.log(lipsumTextPayload)
})

console.log(lipsumText)