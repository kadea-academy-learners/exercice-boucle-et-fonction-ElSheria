/*
  Énoncé :
  Écris une fonction `factorielle(n)` qui retourne la factorielle de `n`.
  - Si n est négatif ou invalide, retourner 0
  - Exemple : factorielle(5) => 120

  Signature attendue :
    function factorielle(n) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function factorielle(n) {
  // Exercice non implémenté : calculer la factorielle de n
  // Placeholder neutre : retourne 0 pour indiquer non-implémentation
if (typeof n !== 'number' || isNaN(n)) return 0;
  if (n < 0) return 0;
  if (n === 0 || n === 1) return 1;

  let produit = 1;
  for (let i = 2; i <= n; i++) {
    produit *= i;
  }
  return produit;
}

console.log("factorielle(3) =", factorielle(3));

// Ne pas modifier la ligne ci-dessous
module.exports = { factorielle }
