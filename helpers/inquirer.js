const inquirer = require("inquirer");
require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: [
      {
        value: `1`,
        name: `${"1".green}. Crear tarea`,
      },
      {
        value: `2`,
        name: `${"2".green}. Listar Tarea`,
      },
      {
        value: `3`,
        name: `${"3".green}. Listar Tareas Completas`,
      },
      {
        value: `4`,
        name: `${"4".green}. Listar Tareas pendientes`,
      },
      {
        value: `5`,
        name: `${"5".green}. Completar Tareas`,
      },
      {
        value: `6`,
        name: `${"6".green}. Borrar Tareas`,
      },
      {
        value: `0`,
        name: `${"0".green}. Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=====================".green);
  console.log("Seleciona una opcion");
  console.log("=====================\n".green);

  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "ENTER",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "description",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Porfavor Ingrese una Tarea".red;
        }
        return true;
      },
    },
  ];
  const { description } = await inquirer.prompt(question);
  return description;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
};
