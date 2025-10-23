/*
  Énoncé :
  Crée une fonction `max(a, b)` qui retourne :
    - le plus grand des deux nombres
    - la chaîne "Les deux nombres sont égaux" si les deux sont identiques
    - null si un argument n'est pas un nombre valide

  Signature attendue :
    function max(a, b) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function max(a, b) {
  // Exercice non implémenté : retourner le plus grand ou un message si égaux
  // Placeholder neutre : retourne null pour indiquer non-implémentation
  if (arguments.length !== 2) return null;

  if (typeof a !== 'number' || typeof b !== 'number') return null;
  if (isNaN(a) || isNaN(b)) return null;

  if (a === b) return "Les deux nombres sont égaux. ";
  return a > b ? a : b;
}
console.log("Le plus grand nombre entre 8 et 5 = ", max(8, 5));
console.log("Le plus grand nombre entre 10 et 10 = ", max(10, 10));
console.log("Le plus grand nombre entre '12' et 9 = ", max("12", 9));

// Ne pas modifier la ligne ci-dessous
module.exports = { max }
