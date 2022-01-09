const talk = document.querySelector('.talk');
const voice2text = document.querySelector('.voice2text');
const photo = document.querySelector('.photo');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();
//to make the image appear in html
var img = document.createElement('img');
photo.appendChild(img);

recorder.onstart = function () {
    console.log('Voice is activated, You can talk!');
}

////Spoken Response////
function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();

    if (message.includes('how are you')) {
        speech.text = "I am fine, thanks. How are you?";

    } else if (message.includes('duck')) {
        speech.text = "duck";
        img.src = 'images/BB.JPG';


    } else if (message.includes('dog')) {
        speech.text = "dog";
        img.src = 'images/dog.jpg';
    } else if (message.includes('cat')) {
        speech.text = "cat";
        img.src = 'images/cat.jpg';
    } else if (message.includes('horse')) {
        speech.text = "horse";
        img.src = 'images/horse.jpg';
    } else {
        speech.text = "This is my default response";
    }
    setTimeout(function () {
        img.src = "";
        voice2text.textContent = "";
    }, 5000);
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech)
}

recorder.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    voice2text.textContent = transcript;
    botVoice(transcript);
    console.log(event);
}
talk.addEventListener('click', function () { recorder.start(); });


