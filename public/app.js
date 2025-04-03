function add(a, b) {
    return a + b;
}
  
function surprenant() {
  var texte = document.getElementById("input").value; 
  var resultat = document.getElementById("reponse"); 
  resultat.innerHTML = "Je le savais " + texte + ". ☝️🤓"; 
}

module.exports = { add };

