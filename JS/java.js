start();

function login() {
    let entrar = document.getElementById('login');
    entrar.onclick = function() {
        let matri = document.getElementById('matri');
        let password = document.getElementById('password');

        if((matri.value == '123456') && ('123456' == password.value)){
            document.getElementById('matri').value = '';
            document.getElementById('password').value = '';
            alert("Seja bem vindo!");
        } else if(matri.value != '123456' || senha.value != '123456'){
            document.getElementById('incorreto').display = true;
        }

        if (valido(matri, password)) {
        clearFields(matri, password);
        }
    };
}

function valido(matri, password) {
    let valido = true;
    if (matri.value.trim() === '') {
        alert('Digite a matrícula!');
        valido = false;
    
    } else if (password.value.trim() === '') {
        alert('Digite a senha!');
        valido = false;
    }

    return valido;
}

function clearFields(matri, password) {
    matri.value = '';
    password.value = '';
    matri.focus();
}