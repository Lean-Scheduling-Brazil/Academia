document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    console.log(username, password);
    
    
    // Adicione aqui o código para verificar as credenciais do usuário
    if(username == "teste" && password=="1234" ) {        
        window.location.href = "/AulaExemplo.html";
      //fs.writeFile("datetime.txt", dateString, function(err) {
      //    if (err) throw err;
      //    console.log("Data e hora atual salvas no arquivo");
      //  });
        
    }
    else{
      alert("Login invalido")
    }
  });
//export const user2 = "user";

  