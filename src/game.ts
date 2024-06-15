import Detective from "./character/detective.js";
import Mansion from "./locations/mansion.js";
import { Guest, guests } from "./guests/guest.js";
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function startGame() {
  let rainbowTitle = chalkAnimation.rainbow(
    `Welcome to the game "Murder at the Mansion."`
  );
  await sleep();
  rainbowTitle.stop();
  console.log(chalk.green`ℳ𝒶𝒹ℯ 𝒷𝓎 ℳ𝓊𝒽𝒶𝓂𝓂𝒶𝒹 ℛ𝒶𝓂𝓏𝒶𝓃 𝒜𝓀𝓇𝒶𝓂`);
  await mainMenu();
}

const mansion = new Mansion();
const detective = new Detective("Sherlock");

const mainMenu = async () => {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "actions",
      message: chalk.yellowBright("What do you want to do?"),
      choices: [
        "Investigate a location",
        "Pick up an item",
        "Use an item",
        "Interrogate a suspect",
        "Exit",
      ],
    },
  ]);

  switch (answers.actions) {
    case "Investigate a location":
      await selectMainLocation();
      break;
    case "Pick up an item":
      await pickItem();
      break;
    case "Use an item":
      await useItem();
      break;
    case "Interrogate a suspect":
      await interrogateSuspect();
      break;
    case "Exit":
      console.log(chalk.whiteBright`Exiting the game....`);
      process.exit();
      break;
  }

  await mainMenu();
};

const selectMainLocation = async () => {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "location",
      message: chalk.yellowBright("Select a location:"),
      choices: ["Mansion"],
    },
  ]);

  if (answers.location === "Mansion") {
    await investigateLocation();
  }
};

const investigateLocation = async () => {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "room",
      message: chalk.yellowBright("Select the room you want to investigate:"),
      choices: mansion.rooms,
    },
  ]);

  const room = answers.room;
  detective.investigate(room);
  const clues = mansion.investigateRoom(room);

  for (const clue of clues) {
    console.log(chalk.greenBright(`Found clue: ${clue}`));
  }
};

const pickItem = async () => {
  const roomAnswers = await inquirer.prompt([
    {
      type: "list",
      name: "room",
      message: chalk.yellowBright(
        "Select the room from which you want to pick up an item:"
      ),
      choices: mansion.rooms,
    },
  ]);

  const room = roomAnswers.room;
  const clues = mansion.investigateRoom(room);

  if (clues.length === 0) {
    console.log(chalk.redBright(`No items found in the ${room}.`));
    return;
  }

  const itemAnswers = await inquirer.prompt([
    {
      type: "list",
      name: "item",
      message: chalk.yellowBright(
        `Select the item you want to pick up from ${room}:`
      ),
      choices: clues,
    },
  ]);

  const item = itemAnswers.item;
  detective.pickupItem(item);
};

const useItem = async () => {
  const roomAnswers = await inquirer.prompt([
    {
      type: "list",
      name: "room",
      message: chalk.yellowBright(
        "Select the room from which you want to use an item:"
      ),
      choices: mansion.rooms,
    },
  ]);

  const room = roomAnswers.room;
  const clues = mansion.clues[room];

  if (clues.length === 0) {
    console.log(chalk.redBright(`No items found in the ${room}.`));
    return;
  }

  const itemAnswers = await inquirer.prompt([
    {
      type: "list",
      name: "item",
      message: chalk.yellowBright(
        `Select the item you want to use from ${room}:`
      ),
      choices: clues,
    },
  ]);

  const item = itemAnswers.item;

  if (room === "Library" && item === "A torn paper of a diary") {
    console.log(
      chalk.yellowBright(
        `Detective Sherlock uses ${item} and finds a clear poetry by "Tehzeeb Hafi:`
      )
    );
    console.log(
      chalk.greenBright(`Parai Aag pe Roti Nahin Banaunga
        Mai bheeg jaaunga chhatari nahin banaunga
        
        Agar Khuda ne banane ka ikhtiyar diya
        Ilm banaunga birchi nahin banaunga
        
        Fareb de ke tera jism jeet loon lekin
        Mai peed kaat ke kashti nahin banaunga
        
        Gali se koi bhi guzre to chonk utha hoon
        Naye makaan mein khirki nahin banaunga
        
        Mai dushmano se agar jung jeet bhi jaaun
        To unki auratein qaidi nahin banaunga
        
        Tumhein pata to chale be-zubaan cheez ka dukh
        Mai ab chiraagh ki loh nahin banaunga
        
        Mai ek film banaunga apne dhanpar
        Aur usmein rail ki patri nahin banaunga`)
    );
  } else {
    console.log(
      chalk.yellowBright(
        `Detective Sherlock uses ${item} but found no solid evidence that leads to the murderer's identification.`
      )
    );
  }
};

// Function to interrogate a suspect
const interrogateSuspect = async () => {
  const guestChoices = guests.map((guest) => guest.name);

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "suspect",
      message: chalk.yellowBright("Select a guest to interrogate:"),
      choices: guestChoices,
    },
  ]);

  // Find the selected guest
  const selectedGuest = guests.find((guest) => guest.name === answers.suspect);

  if (selectedGuest) {
    console.log(
      chalk.yellowBright(
        `${detective.name} interrogates ${selectedGuest.name}.`
      )
    );
    console.log(
      chalk.yellowBright(`Detective: "Is any of these items yours?"
        1-"A torn paper of a diary"
        2-"A bloody knife"
        3-"A suspicious note"
        4-A letter opener`)
    );

    // Simulate the guest's response about the item
    console.log(
      chalk.yellowBright(
        `${selectedGuest.name}: "No, none of these items are mine, sir. I've never seen them before."`
      )
    );

    // Now ask the guest to write two poetry lines
    console.log(
      chalk.yellowBright(
        `Detective: "Do you like poetry? Please write two lines for me."`
      )
    );

    let poetry1, poetry2;
    // Handle specific case for Waqar
    if (selectedGuest.name === "Waqar") {
      poetry1 = "Parai Aag pe Roti Nahin Banaunga";
      poetry2 = "Mai bheeg jaaunga chhatari nahin banaunga";
    } else {
      // For other guests, provide random poetry lines
      poetry1 = generateRandomPoetryLine();
      poetry2 = generateRandomPoetryLine();
    }

    // Display the poetry lines
    console.log(chalk.yellowBright(`${selectedGuest.name}: "${poetry1}"`));
    console.log(chalk.yellowBright(`${selectedGuest.name}: "${poetry2}"`));

    // Handle special case for Waqar
    if (
      selectedGuest.name === "Waqar" &&
      poetry1 === "Parai Aag pe Roti Nahin Banaunga" &&
      poetry2 === "Mai bheeg jaaunga chhatari nahin banaunga"
    ) {
      console.log(
        chalk.redBright(
          `${detective.name}: "That's the exact same lines from the torn paper of diary!"`
        )
      );
      console.log(
        chalk.redBright(
          `${detective.name}: "Let me compare your handwriting with the torn paper."`
        )
      );
      console.log(
        chalk.redBright(
          `${detective.name}: "I got you your writing is same as the "Torn piece of diary" contain i found in the library."`
        )
      );
      console.log(
        chalk.redBright(
          `${detective.name}: "And its your bad luck you write the same line as the "Torn piece of diary have now come with me towards the jail."`
        )
      );
      selectedGuest.isMurderer = true;
    }
  } else {
    console.log(chalk.redBright("Selected guest not found."));
  }
};

// Function to generate a random poetry line
const generateRandomPoetryLine = () => {
  const poetryLines = [
    `"Jab us ki tasveer banaya karta tha",
    "Kamra rangon se bhar jaya karta tha"`,

    `"Peyr mujhe hasrat se dekha karte the",
    "Main jungle mein paani laaya karta tha"`,

    `"Thak jata tha badal saaya karte karte",
    "Aur phir main badal pe saaya karta tha"`,

    `"Betha rehta tha saahil pe sara din",
    "Dariya mujh se jaan churaya karta tha"`,

    `"Bint sahra rootha karti thi mujh se",
    "Main sahra se reet churaya karta tha"`,
  ];

  const randomIndex = Math.floor(Math.random() * poetryLines.length);
  return poetryLines[randomIndex];
};

// Start the game

export { startGame };
