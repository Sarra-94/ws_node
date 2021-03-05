// on a 3 types de module
// local module => cree dans un projet
const localModule = require("./localModule");
// local module est un objet qui contient sum and minus
console.log(` the sum of 2 et 3 est`, localModule.sum(2, 3));

// --------------------------------------------------------
// y a des variable global comme process
// process contient un key argv
// exapmle node app 1 2 3
// => argv:[node app 1 2 3]
// on peut faire le calcul de 1 et 2 et 3
// by getting the 1 =>process.argv[2].....
