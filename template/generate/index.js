const fs = require("fs");
const path = require("path");
const { execSync, exec, spawnSync } = require("child_process");
const { Select, prompt } = require("enquirer");

// let execGenCommand = (type) => {
//   const rootDirectory = path.join(__dirname, "../");
//   console.log("🔄  Generating...", `yarn gen:${type}`, rootDirectory);
//   const prompt = new Select({
//     name: "color",
//     message: "What do you need ",
//     choices: [
//       { message: "Screen", value: "screen" },
//       { message: "Slice", value: "slice" },
//     ],
//   });

//   prompt.run().then(execGenCommand).catch(console.error);
//   setTimeout(() => execSync(`yarn gen:${type}`, { cwd: rootDirectory }), 3000);
// };

async function gen() {
  try {
    const rootDirectory = path.join(__dirname, "../");

    let selectLocation = new Select({
      type: "select",
      name: "location",
      message: "Where would you like to generate new screen",
      choices: [
        { message: "LoggedInStack", value: "LoggedInStack" },
        { message: "LoginStack", value: "LoginStack" },
      ],
    });

    let select = new Select({
      name: "color",
      message: "What do you need ",
      choices: [
        { message: "Screen", value: "screen" },
        { message: "Slice", value: "slice" },
      ],
    });

    let type = await select.run();

    const { name } = await prompt({
      type: "input",
      name: "name",
      message: `Enter the name of ${type}`,
    });

    if (type === "screen") {
      let location = await selectLocation.run();
      execSync(
        `yarn gen:${type} --name ${name.toLowerCase()} --location ${location}`,
        {
          cwd: rootDirectory,
        }
      );

      return;
    }

    console.log(
      "🔄  Generating...",
      `yarn gen:${type} --name ${name.toLowerCase()}`,
      rootDirectory
    );
    execSync(`yarn gen:${type} --name ${name.toLowerCase()}`, {
      cwd: rootDirectory,
    });
  } catch (error) {}
}

gen();
