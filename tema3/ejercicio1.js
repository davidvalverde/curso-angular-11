class Persona {
    constructor(nombre, apellido, dni) {
      // Inicializa las variables
      this.nombre = nombre;
      this.apellido = apellido;
      this.dni = dni;
    }
  }
  
  class Trabajador extends Persona {
    constructor(nombre, apellido, dni, nombreEmpresa, direccionEmpresa) {
      // Inicializa las variables
      super(nombre, apellido, dni);
      this.nombreEmpresa = nombreEmpresa;
      this.direccionEmpresa = direccionEmpresa;
    }
  }
  
  // Crea un trabajador y muestra alguno de sus atributos
  let trabajador = new Trabajador("Juan", "Perez", "12345678A", "Imagina Formación", "Valencia");
  
  console.log(trabajador.nombre + " " + trabajador.apellido);