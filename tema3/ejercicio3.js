function sumaArray(numeros) {
    var suma = 0;
    numeros.forEach(x => suma += x);
    return suma;
  }
  
  var myArray = [3, 5, 3, 1];
  
  console.log("La suma es: ", sumaArray([...myArray, 1, 2, 4, 7]));