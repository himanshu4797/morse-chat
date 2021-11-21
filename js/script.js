var btn = document.getElementById('button');
var ip = document.getElementById('textarea');
var op = document.getElementById('output');

var serverURL = "https://api.funtranslations.com/translate/morse.json";

function getInput(input){
  return serverURL +"?"+"text= ["+input+"]";
};

function caughtError(error){
  console.log("error occured :", error);
  alert("hey user, something went wrong in server, plz try after sometime!");
}
function clickEventHandler(){
    var text = ip.value;

    fetch(getInput(text))
      .then(response=>response.json())
      .then(json=>{
         var translatedTxt = json.contents.translated;
         op.innerText = translatedTxt;
      })
      .catch(caughtError)
};

btn.addEventListener("click", clickEventHandler);
