video = ""
object = []
status_1=""

function preload(){
video = createVideo("video.mp4")
video.hide();
}
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
}
function draw(){
    image(video, 0, 0, 480, 380)
    if(status_1 != ""){
        objectDetector.detect(video, gotresult);
    
    for(var i=0; i < object.length ; i++){
        document.getElementById("status").innerHTML = "Status : Objects Detected."
        document.getElementById("NumberOfObjects").innerHTML = "Number of object detected are : "+ object.length;
        fill("lightblue")
        percent = floor(object[i].confidence*100)
        text(object[i].label+" "+percent+"%",object[i].x + 15 ,object[i].y + 15)
        stroke("blue")
        noFill()
        rect(object[i].x, object[i].y, object[i].width, object[i].height)
    }
}
}
function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}
function modelLoaded(){
    console.log('Model Loaded')
    status_1 = true;
    video.volume(0)
    video.speed(1)
    video.loop()
}
function gotresult(error, result){
    if(error){
        console.log(error)
    };
    console.log(results);
    object = results;
}