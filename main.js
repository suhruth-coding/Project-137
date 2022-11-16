objects = [];
status = "";
video = "";
object_name = document.getElementById("")

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide(); 
}

function draw(){
    image(video, 0, 0, 480, 380);
    if(status != ""){
        objectDetector.detect(video, gotResult);
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Detected Objects";
            document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected are : " + objects.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    if(objects[i].label == object_name){
        variable_name_holds_webcamLiveView.stop();
        objectDetector.detect(gotResult);
        document.getElementById("object_status").innerHTML = object_name + "Found";
        synth = window.speechSynthesis;
        utterThis = new SpeechSynthesisUtterance(object_name + "Found");
        synth.speak(utterThis);
    }
    else{
        document.getElementById("object_status").innerHTML = object_name + "Not Found";
    }
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}