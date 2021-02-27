function sumaArray(numeros) {
    var suma = 0;
    numeros.forEach(x => suma += x);
    return suma;
  }
  
  console.log("La suma es: ", sumaArray([1, 2, 4, 7]));