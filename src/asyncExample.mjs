import { promises as fs } from "fs"

// async file read
fs.readFile("example.txt", "utf8")
    .then(data => {
        console.log("Content: ", data)
    })
    .catch(e => {
        console.log("error reading content: ", e)
    })

    console.log("reading file asynchronously...")