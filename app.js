require("colors");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const { guardarDB } = require("./helpers/guardarArchivo");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
  console.log("Hola Mundo");

  let opt = "";
  const tareas = new Tareas();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        //crear opcion para
        const description = await leerInput("Description:");
        tareas.crearTareas(description);
        break;

      case "2":
        console.log(tareas.listadoArr);
        break;
    }

    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== "0");
};

main();
