/*
  Énoncé :
  Écris une fonction `estImpair(n)` qui retourne :
    - true si `n` est un entier impair
    - false si `n` est un entier pair
    - null pour les entrées non numériques ou invalides

  Signature attendue :
    function estImpair(n) -> boolean | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function estImpair(n) {
  // Exercice non implémenté : vérifier si n est impair
  // Placeholder neutre : retourne null pour indiquer non-implémentation
  if (typeof n !== 'number' || isNaN(n)) return null;

  if (!Number.isInteger(n)) return false;

  return Math.abs(n % 2) === 1;
}

console.log("Est-ce que 5 est impair ? ", estImpair(5));
console.log("Est-ce que 8 est impair ? ", estImpair(8));
console.log("Est-ce que 'xyz' est impair ? ", estImpair("xyz"));

// Ne pas modifier la ligne ci-dessous
module.exports = { estImpair };
