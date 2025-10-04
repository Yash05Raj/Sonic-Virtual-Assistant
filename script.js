let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");


// we are creating a speak function by using this we are able talk to the assistant

function speak(text){
    window.speechSynthesis.cancel();
    let text_speak = new SpeechSynthesisUtterance(text);

    // set other perimeters
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-GB";
    window.speechSynthesis.speak(text_speak);
}


// now we are doing speech recognition

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event)=>{
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
    // console.log(event);
};


btn.addEventListener("click", ()=>{
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});


// takeCommand
function takeCommand(message)
{
    btn.style.display = "flex";
    voice.style.display = "none";
    if(message.includes("hello") || message.includes("hello sonic"))
    {
        speak("Hey there, how can i help?");
    }
    else if(message.includes("who are you"))
    {
        speak("i'm your assistant. my name is sonic.");
    }
    else if(message.includes("what is you name")) // not working
    {
        speak("my name your sonic assistant. my mission is to assist you");
    }
    else if(message.includes("open youtube"))
    {
        speak("opening youtube");
        window.open("http://www.youtube.com");
    }
    else if(message.includes("open instagram"))
    {
        speak("opening instagram");
        window.open("http://www.instagram.com");
    }
    else if(message.includes("open facebook"))
    {
        speak("opening facebook");
        window.open("http://www.facebook.com");
    }
    else if(message.includes("open google"))
    {
        speak("opening google");
        window.open("http://www.google.com");
    }
    else if(message.includes("open twitter"))
    {
        speak("opening twitter");
        window.open("http://www.twitter.com");
    }
    else if(message.includes("open github"))
    {
        speak("opening github");
        window.open("http://www.github.com");
    }
    else if(message.includes("open calculator"))
    {
        speak("opening calculator");
        window.open("calculator://");
    }
    else if(message.includes("open whatsapp"))
    {
        speak("opening whatsapp");
        window.open("whatsapp://");
    }
    else if(message.includes("open Calendar"))
    {
        speak("opening Calendar");
        window.open("Calendar://");
    }
    else if(message.includes("time"))
    {
        let time = new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"});
        speak(time);
    }
    else
    {
        speak("i found this on the web.")
        window.open(`https://www.google.com/search?q=${message}`);
    }
    

}









