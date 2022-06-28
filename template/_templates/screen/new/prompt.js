// see types of prompts:
// https://github.com/SBoudrias/Inquirer.js#prompt-types
//
// and for examples for prompts:
// https://github.com/SBoudrias/Inquirer.js/tree/master/examples
module.exports = [
  {
    type: "select",
    name: "location",
    message: "Where would you like to generate new screen",
    choices: [
      { message: "LoggedInStack", value: "LoggedInStack" },
      { message: "LoginStack", value: "LoginStack" },
    ],
    default: "LoggedInStack",
  },
  {
    type: "input",
    name: "name",
    message: "Enter the name of screen",
  },
];
