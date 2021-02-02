const alreadyRegisteredUsernames = ["kim", "emmanuel", "nicolas"];

document.querySelector("form").addEventListener("submit", () => {
    // avant d'envoyer les données au serveur, on peut faire une étape de validation

    // on n'envoie pas vraiment les données pour l'exercice
    document.querySelector("main").innerHTML = "Compte créé :)";
});

function changeColor(color) {
    document.body.style.background = color;
}

let mdp = document.getElementById('password');
let mdp_conf = document.getElementById('comfirm-password');

// if (mdp.value == "") {
//     alert("Saisissez votre mot de passe");
//     password.focus();
//     return false;
// }