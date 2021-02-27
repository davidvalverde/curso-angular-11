
function reemplazar(texto, patron) {
    var numOcurrences = 0;
    var position = 0;
    var lastIndex = -1;
    while (position >= 0) {
      position = texto.indexOf(patron, position);
      if (position >= 0) {
        numOcurrences++;
        lastIndex = position;
        position += 1;
      }
    }
    
    console.log("El número de veces que el patrón se repite es ", numOcurrences);
  
    if (lastIndex >= 0) {
      var textoModificado = texto.substr(0, lastIndex)
        .concat("Encontrado!")
        .concat(texto.substr(lastIndex + patron.length));
      console.log("El texto modificado es: ", textoModificado);
    } else {
      console.log("El texto sigue igual: ", texto);
    }
  }
  
  function main() {
    var texto = prompt("Introduce un texto: ");
    var patron = prompt("Introduce un patrón: ");
  
    reemplazar(texto, patron);
  }
  
  main();
  