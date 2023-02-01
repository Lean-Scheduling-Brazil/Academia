// Lê todos os cookies
var allCookies = document.cookie;

// Quebra todos os cookies em um array
var cookieArray = allCookies.split(";");

// Loop através de todos os cookies
for (var i = 0; i < cookieArray.length; i++) {
  // Separe o nome do valor
  var cookie = cookieArray[i].split("=");
  
  // Verifique se o nome do cookie é "username"
  if (cookie[0].trim() == "username") {
    // Armazene o valor do cookie em uma variável
    var username = cookie[1];
    break;
  }
}

document.getElementById('user').innerHTML = username;

var lastPage = window.location.pathname;
var d = new Date();
d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
var expires = "expires=" + d.toUTCString();
document.cookie = "lastPage=" + lastPage + ";" + expires + ";path=/";