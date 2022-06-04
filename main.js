var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    
    recognition.start();
} 
 

recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    
    console.log(Content);
    if(Content=="take my selfie"){
        console.log("taking selfie in 5 seconds");
        speak();
    }
    


}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function()
    {
    img_id="selfie1";
    take_snapshot();
    function take_snapshot()
{
console.log(img_id);
Webcam.snap (function(data_uri) {
if(img_id=="selfie1"){
document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
}
if(img_id="selfie2"){
document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
}
if(img_id="selfie3"){
document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
}
});
}
    }, 5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'tng',
    png_quality:90
});
camera=document.getElementById("camera");
function take_snapshot()
{
console.log(image_id);
Webcam.snap (function(data_uri) {
if(img_id=="selfiel"){
document.getElementById("result1").innerHTML = '<img id="selfiel" src="'+data_uri+'"/>';
}
if(img_id="selfie2"){
document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
}
if(img_id=="selfie3"){
document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
}
});
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}