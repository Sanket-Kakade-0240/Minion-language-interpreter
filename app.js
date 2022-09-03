var btnTranslate= document.querySelector("#btn-translate");
var txtarInput = document.querySelector("#textar-Input");
console.log(txtarInput);
var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "	https://api.funtranslations.com/translate/minion.json"
function getTranslateURL(text) {
    return serverURL + "?" + "text= " + text
} 

function errorHandler(error){
    console.log("error detected", error)
    alert("Server failed to fetch, try again later...")
}

function clickEventHandler() {
    //outputDiv.innerText = ("wefsdv" + txtarInput.value);
    var inputText= txtarInput.value;
    fetch (getTranslateURL(inputText))
    .then (response => response.json())
    .then (json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;        
        })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler );