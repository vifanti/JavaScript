function getMarvelResponse() {
// you will also have to setup the referring domains on your marvel developer portal
var PRIV_KEY = "2183109a47a13c37e86934ab9867e747b729a115";
var PUBLIC_KEY = "8ca0518c7fafefd3f0dc5eee818d10e1";

function getMarvelResponse() {

  // you need a new ts every request                                                                                    
  var ts = new Date().getTime();
  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  
  // the api deals a lot in ids rather than just the strings you want to use
  var characterId = '1009718'; // wolverine                                                                             


  var url = 'http://gateway.marvel.com:80/v1/public/comics';

  console.log(url);
  $.getJSON(url, {
    ts: ts,
    apikey: PUBLIC_KEY,
    hash: hash,
    characters: characterId
    })
    .done(function(data) {
      // sort of a long dump you will need to sort through
      console.log(data);
      document.getElementById("listaHerois").value = data;
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};
}