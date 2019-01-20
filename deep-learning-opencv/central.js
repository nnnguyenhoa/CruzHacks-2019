var express = require('express');
const logger = require("morgan");
var cookieParser = require('cookie-parser');
var multer  = require('multer')
var upload = multer({ dest: './images/' })
const child_process = require('child_process');
var fs = require('fs');
var app = express();
var sql = require('test.js');

app.use(express.bodyParser());
app.use(cookieParser());
app.use(logger('dev'));

// const storage = multer.diskStorage({
//   destination: '/home/siddh991/undecided/deep-learning-opencv/images',
//   filename: function (req, file, callback) {
//   	callback(file);
//   }
// });

app.post('/login', function(req, res){
    console.log('POST /');
    console.dir(req.body);
    res.cookie('user' , req.body.user);
    res.cookie('pass' , req.body.pass).send('Cookie is set');
    if(good) {
    	res.status(200).send("good");
    }
    else {
    	res.status(403).send("bad");
    }
});

app.post('/photo', upload.single('eagle.png'), function(req, res, next){
    console.log('POST /');
    console.log(req.body.filetoupload);
    
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
});

port = 3000;
app.listen(port);
console.log('Listening at 10.142.0.2:' + port)