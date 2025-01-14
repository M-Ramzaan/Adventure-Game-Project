# Adventure-Game-Project

Murder at the Mansion

"Murder at the Mansion" is a CLI-based detective game where players step into the shoes of Detective Sherlock to solve a thrilling murder mystery within a mysterious mansion. The game challenges players to investigate various rooms, collect clues, interrogate suspects, and ultimately uncover the identity of the murderer.

How to Run the Game

To run "Murder at the Mansion" on your local machine, follow these steps:

Clone the Repository:

git clone <repository_url>
cd murder-at-the-mansion

Install Dependencies:

Ensure you have Node.js installed. Then, install TypeScript and the required npm packages using:

npm install

Compile TypeScript:

TypeScript needs to be compiled to JavaScript before running. Use the following command to compile:

npm run build

Start the Game:

Run the game using the following command:

npm start

Technologies and Libraries Used

TypeScript: The game is developed using TypeScript, providing strong typing and modern JavaScript features.

Node.js: The runtime environment used to execute JavaScript code outside a web browser.

npm Packages:

inquirer: For creating interactive command-line prompts.
chalk: Used to style and colorize the CLI output for enhanced readability.
chalk-animation: Provides animated text effects, used for the welcome title animation.

Project Structure

The project follows a structured approach with TypeScript for enhanced maintainability and readability:

character/:

Contains the detective.ts file defining the Detective class.

locations/:

Includes the mansion.ts file, defining the Mansion class and its rooms.

guests/:

Contains the guest.ts file defining the Guest class and an array of guests.
game.ts:

The main TypeScript file where the game logic, such as investigation, item interaction, and suspect interrogation, is implemented.

tsconfig.json:

Configuration file for TypeScript compiler options.

package.json:

Lists project dependencies and defines npm scripts for building and running the game.

Gameplay Overview

"Murder at the Mansion" immerses players in a text-based adventure where they must:

Investigate Locations:

Explore different rooms in the mansion to uncover clues.

Collect Items:

Pick up crucial items that may aid in solving the mystery.

Use Items:

Utilize collected items strategically to progress in the investigation.

Interrogate Suspects:

Question suspects to gather information and identify the murderer.

Developer Notes

This game leverages TypeScript to provide type safety and maintainable code structure. It demonstrates the use of object-oriented programming principles and integrates npm packages for interactive CLI experiences and visual enhancements.

Enjoy playing "Murder at the Mansion" and challenge yourself to solve the case!
