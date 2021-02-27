import * as readline from 'readline-sync';

enum Tipo {Completada, Incompleta, Eliminada}

class Todo {
  mensaje: string;
  tipo: Tipo;
 
  constructor(mensaje: string, tipo: Tipo) {
    this.mensaje = mensaje;
    this.tipo = tipo;
  }

  isCompleta() { return this.tipo === Tipo.Completada }
  marcarCompleta() { this.tipo = Tipo.Completada; }
}

class ListadoTareas {
    listado: Todo[] = [];
  
    agregarNuevaTarea(tarea: Todo) {
      this.listado.push(tarea);
    }
  
    modificarTarea(indice: number, tarea: Todo) {
      this.listado[indice] = tarea;
    }

    mostrarListado(indice?: number) {
        if(indice) { console.log("Tu tarea es: ", this.listado[indice]); }
        else { console.log("Tus tareas son: ", this.listado); }
    }

    obtenerNumeroTareas(): number {
        return this.listado.length;
    }
}

class ReadLineUtils {
    obtenerAccion(): string {
        return readline.question('Elige tu accion: ');
    }

    obtenerNombreTarea(): string {
        return readline.question("Introduce el nombre la nueva tarea: ");
    }

    obtenerTipoTarea(): Tipo {
        var tipoIncorrecto = true;
        while (tipoIncorrecto) {
            var tipoValor: string = readline.question("Introduce el estado de la tarea (0: Completada, 1: Incompleta, 2: Eliminada): ");
            if (Tipo[tipoValor]) {
                tipoIncorrecto = false;
            }
        }
        return Tipo[tipoValor];
    }

    obtenerIndiceTarea(numTareas: number): number {
        var indiceIncorrecto = true;
        while (indiceIncorrecto) {
            var indice: number = readline.question("Introduce el indice de la tarea (entre 0 y " + (numTareas - 1) + "): ");
            if (indice >= 0 && indice < numTareas) {
                indiceIncorrecto = false;
            }
        }
        return indice;
    }
}

function main() {
    var continuar = true;
    var listado = new ListadoTareas();
    var utils = new ReadLineUtils();

    while (continuar) {
      	// Logs por consola indicando las acciones que puede realizar el usuario
        console.log("TODO Opciones: 1 -> Nueva, 2 -> Modificar, 3 -> Mostrar uno, 4 -> Mostrar todos, 0 -> Salir");

      	// Obtenemos accion del usuario
        var accion = utils.obtenerAccion();
      	
        switch (accion) {

            case '1': 
                console.log("== Nueva tarea ==");

                // Capturar por consola mensaje y tipo
                var mensaje = utils.obtenerNombreTarea();
                var tipo = utils.obtenerTipoTarea();

                // Llamar al método agregarNuevaTarea
                listado.agregarNuevaTarea(new Todo(mensaje, tipo));

                break;

            case '2': 
                console.log("== Modificar tarea==");

                var numTareas: number = listado.obtenerNumeroTareas();
                if (numTareas > 0) {
                    // Capturar por consola mensaje y tipo
                    var mensaje = utils.obtenerNombreTarea();
                    var tipo = utils.obtenerTipoTarea();

                    // Capturar por consola el índice
                    var indice = utils.obtenerIndiceTarea(numTareas);

                    // Llamar al método modificarTarea
                    listado.modificarTarea(indice, new Todo(mensaje, tipo));
                } else {
                    console.log("No tienes ninguna tarea. Introduce al menos una antes de seleccionar esta opción");
                }
                
                break;

            case '3': 
                console.log("== Mostrar uno ==");

                var numTareas: number = listado.obtenerNumeroTareas();
                if (numTareas > 0) {
                    // Capturar por consola el índice
                    var indice = utils.obtenerIndiceTarea(numTareas);

                    // Llamar al método mostrarListado
                    listado.mostrarListado(indice);
                } else {
                    console.log("No tienes ninguna tarea. Introduce al menos una antes de seleccionar esta opción");
                }

                break;

            case '4':
                console.log("== Mostrar todos ==");

                // Llamar al método mostrarListado
                listado.mostrarListado();

                break;

            case '0':
                console.log("Gracias por haber utilizado TODO.");
                continuar = false;
                break;
            default: 
                console.log("Opción incorrecta, inténtelo de nuevo.");
                break;
        }
    }
}

main();