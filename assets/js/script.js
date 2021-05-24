let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOK = false
let assuntoOK = false


function validaNome() {
    let txt = document.querySelector('#txtNome')
    if(nome.value.length <3){
      
    }else {
       
        nomeOk = true
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1 ) {
      
    }else {
       
        emailOK = true
    }
}
function validaAssunto () {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
       
     } else {
      
        assuntoOK = true
     }
}

function enviar() {
    if( nomeOk == true && emailOK == true && assuntoOK == true){
        alert ('Formulário enviado com sucesso!')
    }else if (nomeOk == false && emailOK == true && assuntoOK == true){
        alert('Preencha o nome')
    }else if (nomeOk == true && emailOK == false && assuntoOK == true){
        alert('Preencha o E-mail')
    }else if (nomeOk == true && emailOK == true && assuntoOK == false){
        alert('Preencha o assunto')
    }else {
        alert('Preencha o formulario corretamente antes de enviar...')
    }
}