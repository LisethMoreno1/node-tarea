const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach(key => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  crearTareas(description = "") {
    const tarea = new Tarea(description);
    this._listado[tarea.id] = tarea;
  }
}

module.exports = Tareas;