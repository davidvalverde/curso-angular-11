function sumaArray(numeros) {
    var suma = 0;
  
    for(var i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
  
    return suma;
  }
  
  console.log("La suma es: ", sumaArray([1, 2, 4, 7]));