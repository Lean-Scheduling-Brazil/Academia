


document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;
  console.log(username, password);
  
  var d = new Date();
  d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();       
  // Armazene o nome de usuário em um cookie
  document.cookie = "username=" + username + ";" + expires + ";path=/";

  fetch('user.txt')
  .then(response => response.text())
  .then(fileContent => {

// Divide o conteúdo do arquivo .txt em linhas
  var lines = fileContent.split("\n");

// Loop através de todas as linhas
  for (var i = 0; i < lines.length; i++) {
// Divide cada linha em nome de usuário e senha
  var parts = lines[i].split(":");
  parts[1] = parts[1].replace(/\r?\n|\r/g, '');
  console.log(parts);
  // Adicione aqui o código para verificar as credenciais do usuário
  if (parts[0] == username && parts[1] == password) {
    console.log("Usuário e senha corretos");
    var lastPage = getCookie("lastPage");
if (lastPage != "") {
// Redirecione o usuário para a última página
window.location.href = lastPage;
} else {
// Redirecione o usuário para a página inicial
window.location.href = "/KB/0-Introducao/0/index.html";
}

function getCookie(cname) {
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i < ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0) == ' ') {
    c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
  }
}
return "";
}
    break;
  }  
  
}
 
})

});


