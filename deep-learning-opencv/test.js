var child = require('child_process').spawn('python', ['deep_learning_with_opencv.py'])

// runs when script closes
child.on("close", (code, signal) => {
    console.log("return code: " + code);

    // if code == 1:
    //     console.log(organic)
    // elif code == 2:
    //     console.log(recycling)
    // else:
    //     console.log(garbage)
})

// runs if script throws an error
child.on("error", (err) => {
    console.log("ERROR:");
    console.error(err);
})