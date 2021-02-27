import * as readline from 'readline-sync';
var Tipo;
(function (Tipo) {
    Tipo[Tipo["Completada"] = 0] = "Completada";
    Tipo[Tipo["Incompleta"] = 1] = "Incompleta";
    Tipo[Tipo["Eliminada"] = 2] = "Eliminada";
})(Tipo || (Tipo = {}));
var Todo = /** @class */ (function () {
    function Todo(mensaje, tipo) {
        this.mensaje = mensaje;
        this.tipo = tipo;
    }
    Todo.prototype.isCompleta = function () { return this.tipo === Tipo.Completada; };
    Todo.prototype.marcarCompleta = function () { this.tipo = Tipo.Completada; };
    return Todo;
}());
var ListadoTareas = /** @class */ (function () {
    function ListadoTareas() {
        this.listado = [];
    }
    ListadoTareas.prototype.agregarNuevaTarea = function (tarea) {
        this.listado.push(tarea);
    };
    ListadoTareas.prototype.modificarTarea = function (indice, tarea) {
        this.listado[indice] = tarea;
    };
    ListadoTareas.prototype.mostrarListado = function (indice) {
        if (indice) {
            console.log("Tu tarea es: ", this.listado[indice]);
        }
        else {
            console.log("Tus tareas son: ", this.listado);
        }
    };
    ListadoTareas.prototype.obtenerNumeroTareas = function () {
        return this.listado.length;
    };
    return ListadoTareas;
}());
var ReadLineUtils = /** @class */ (function () {
    function ReadLineUtils() {
    }
    ReadLineUtils.prototype.obtenerAccion = function () {
        return readline.question('Elige tu accion: ');
    };
    ReadLineUtils.prototype.obtenerNombreTarea = function () {
        return readline.question("Introduce el nombre la nueva tarea: ");
    };
    ReadLineUtils.prototype.obtenerTipoTarea = function () {
        var tipoIncorrecto = true;
        while (tipoIncorrecto) {
            var tipoValor = readline.question("Introduce el estado de la tarea (0: Completada, 1: Incompleta, 2: Eliminada): ");
            if (Tipo[tipoValor]) {
                tipoIncorrecto = false;
            }
        }
        return Tipo[tipoValor];
    };
    ReadLineUtils.prototype.obtenerIndiceTarea = function (numTareas) {
        var indiceIncorrecto = true;
        while (indiceIncorrecto) {
            var indice = readline.question("Introduce el indice de la tarea (entre 0 y " + (numTareas - 1) + "): ");
            if (indice >= 0 && indice < numTareas) {
                indiceIncorrecto = false;
            }
        }
        return indice;
    };
    return ReadLineUtils;
}());
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
                var numTareas = listado.obtenerNumeroTareas();
                if (numTareas > 0) {
                    // Capturar por consola mensaje y tipo
                    var mensaje = utils.obtenerNombreTarea();
                    var tipo = utils.obtenerTipoTarea();
                    // Capturar por consola el índice
                    var indice = utils.obtenerIndiceTarea(numTareas);
                    // Llamar al método modificarTarea
                    listado.modificarTarea(indice, new Todo(mensaje, tipo));
                }
                else {
                    console.log("No tienes ninguna tarea. Introduce al menos una antes de seleccionar esta opción");
                }
                break;
            case '3':
                console.log("== Mostrar uno ==");
                var numTareas = listado.obtenerNumeroTareas();
                if (numTareas > 0) {
                    // Capturar por consola el índice
                    var indice = utils.obtenerIndiceTarea(numTareas);
                    // Llamar al método mostrarListado
                    listado.mostrarListado(indice);
                }
                else {
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
//# sourceMappingURL=main.js.map