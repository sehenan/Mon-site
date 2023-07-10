// Les variables
let password = $('#password');
let confirmPassword = $('#confirmPassword');
// var error = $('.error');
let  inscrire = $('#boutton');
// error.css('display','none');
// verifier a chaque entrer
confirmPassword.on('input', verifierPassword);

// Vérifier la confirmation du mot de passe
function verifierPassword() {
    if (password.val() !== confirmPassword.val()) {
        error.css('display', 'inline');
        error.css('color', 'red');
        return false;
    } else {
        error.css('display', 'none');
        return true;
    }
}

// Le clic
inscrire.on('click', verifierPassword);
