// var child = require('child_process').spawn('python', ['deep_learning_with_opencv.py'])
var child = require('child_process').spawn('python', ['deep_learning_with_opencv.py' , '--image' , 'images/eagle.png', '--prototxt', 'bvlc_googlenet.prototxt', '--model', 'bvlc_googlenet.caffemodel', '--labels', 'synset_words.txt'])
// runs when script closes
child.on("close", (code, signal) => {
    // console.log("return code: " + code);

    if (code == 1){
        console.log("organic")
    }
    else if (code == 2){
        console.log("recycling")
    } 
    else{
        console.log("garbage")
    }
})

// runs if script throws an error
child.on("error", (err) => {
    console.log("ERROR:");
    console.error(err);
})