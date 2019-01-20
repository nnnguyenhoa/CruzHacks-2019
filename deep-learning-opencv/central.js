var express = require('express');
const logger = require("morgan");
var cookieParser = require('cookie-parser');
var multer  = require('multer')
var upload = multer({ dest: './images/' })
const child_process = require('child_process');
var fs = require('fs');
var app = express();

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

app.post('/photo', upload.single('picture.png'), function(req, res, next){
    console.log('POST /');
    console.log(req.body.filetoupload);
    child_process.exec(`python3 /home/siddh991/undecided/deep-learning-opencv/deep_learning_with_opencv.py --image images/picture.png --prototxt bvlc_googlenet.prototxt --model bvlc_googlenet.caffemodel --labels synset_words.txt`);
});

port = 3000;
app.listen(port);
console.log('Listening at 10.142.0.2:' + port)