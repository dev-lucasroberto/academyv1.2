function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "luana" && password == "raiosdesol") {
      window.location.href = "luana.html";
    } else if (username == "lucas" && password == "1895") {
      window.location.href = "lucas.html";
    } else {
      alert("Invalid username or password");
    }
  }
  function obterHorarioAtual() {
    // cria um objeto Date com a data e hora atuais
    var dataAtual = new Date();
  
    // formata a hora como hh:mm:ss
    var horaAtual = ('0' + dataAtual.getHours()).slice(-2) + ':' + ('0' + dataAtual.getMinutes()).slice(-2) + ':' + ('0' + dataAtual.getSeconds()).slice(-2);
  
    // formata o dia como dd/mm/aaaa
    var diaAtual = ('0' + dataAtual.getDate()).slice(-2) + '/' + ('0' + (dataAtual.getMonth() + 1)).slice(-2) + '/' + dataAtual.getFullYear();

    

    // retorna um objeto com a hora e o dia atuais
    return {
      hora: horaAtual,
      dia: diaAtual
    };
  }
 

