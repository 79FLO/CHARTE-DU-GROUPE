const button_random_apprenant = document.querySelector("#random_apprenant")
const button_init_state = document.querySelector(value)
const list_apprenant = ["Delphine", "Socunthy", "Laure", "Sandrine", "Arnaud", "Alexandre", "Jean-François", "Jean-Christophe", "Jean-Sébastien", "Terry", "Jessie", "Sébastien", "Pierre", "Kévin", "Johann", "Stéphane"]

function random_apprenant() {
    button_random_apprenant.setAttribute("value", Math.floor(Math.random()*apprenant.length));
    document.getElementById('randomApprenant').value = random_pprenant
}