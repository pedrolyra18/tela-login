function verificarLogin() {

    document.getElementById("loginError").textContent = "";
    document.getElementById("senhaError").textContent = "";

    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if (login === "ale@cesupa.br" && senha === "123123") {
      window.location.href = "https://www.cesupa.br";
    } else if (login === "pedro@giroto.com" && senha === "223344") {
      window.location.href = "https://www.detran.com";
    } else if (login === "isaac@java.com" && senha === "asdasd") {
      window.location.href = "https://www.idopterlabs.com";
    } else {

      if (login !== "ale@cesupa.br" && login !== "pedro@giroto.com" && login !== "isaac@java.com") {
        document.getElementById("loginError").textContent = "Email incorreto.";
      } else {
        document.getElementById("senhaError").textContent = "Senha incorreta.";
      }
    }
  }