var numeros = [];

for (var i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt("Introduce el siguiente número"));
}

var media = 0;
var i = 0;
while (i < numeros.length) {
  media += numeros[i++];
}

media = media / numeros.length;

console.log("La media es: ", media);