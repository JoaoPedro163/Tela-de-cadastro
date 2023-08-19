
function logar(){

    var email = document.getElementById('email1').value;

    if(email !== ""){
      location.href = "sucesso.html";
      }else{
      alert("Email inválido!");
    }
}