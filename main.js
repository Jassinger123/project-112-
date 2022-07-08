Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function capture_img(){
    Webcam.snap(function (data_uri){
        document.getElementById("snapshot").innerHTML='<img id="img_1" src="'+data_uri+'"/>';
    })
}

console.log('ml5 version:',ml5.version);
model=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/O7oO9Zq49/model.json',moldelloaded);

function moldelloaded(){
    console.log("Model Loaded!!!")
}

function speak(){
    var  synth=window.speechSynthesis;
    speak_data1="Predection 1 is "+predection1;
    speak_data2=" And predection 2 is"+predection2;
    speach_data=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    console.log(speach_data);
    synth.speak(speach_data);
}

function snapshot () {
    img = document.getElementById("img_1");
    model.classify(img,got_result);
}

function got_result(error,results){
if (error) {
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("predection_1").innerHTML=results[0].label;
    predection1=results[0].label;
    predection2=results[1].label;
    speak();
    if (predection_1=="Amazing") {
        document.getElementById("emotion_emoji").innerHTML="&#128076;";
    }
    if (predection_1=="Best") {
        document.getElementById("emotion_emoji").innerHTML="&#128077;";
    }
    if (predection_1=="Victory") {
        document.getElementById("emotion_emoji").innerHTML="&#9996;";
    }
}
}