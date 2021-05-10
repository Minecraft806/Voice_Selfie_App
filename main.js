var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function Start() {
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
    Recognition.onresult = function (event) {
        console.log(event);
        //CoolDude
        var Content = event.results[0][0].transcript;
        console.log(Content);
        document.getElementById("textbox").innerHTML = Content;
        if (Content == "take my selfie") {
            console.log("Taking Selfie...");
            Speak();
        }
    }
}

function Speak() {
    var Talk = window.speechSynthesis;
    Speak_Data = "Taking Your Selfie In 5 Seconds";
    var UtterThis = new SpeechSynthesisUtterance(Speak_Data);
    Talk.speak(UtterThis);
    Webcam.attach(WebCamCamera);
    setTimeout(function() {
        Take_Snapshot();
        Save();
    },  5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});

WebCamCamera = document.getElementById("Camera");

function Take_Snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("Result").innerHTML='<img id="CoolDude" src="'+data_uri+'"/>';
    });
}

function Save() {
    link=document.getElementById("Link");
    Image=document.getElementById("CoolDude").src;
    link.href=Image;
    link.click();
}