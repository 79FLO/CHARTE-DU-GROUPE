const apprenant = ["Delphine", "Socunthy", "Laure", "Sandrine", "Arnaud", "Alexandre", "Jean-François", "Jean-Crhistophe", "Jean-Sébastien", "Terry", "Jessy", "Sébastien", "Pierre", "Kévin", "Johann", "Stéphane"]

function randomApprenant() {
    var randomApprenant = apprenant[Math.floor(Math.random()*apprenant.length)];
    document.getElementById('randomApprenant').value = randomApprenant
}