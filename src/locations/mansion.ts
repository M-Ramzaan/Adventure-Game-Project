import chalk from "chalk";
// Creating a mansion class

export class Mansion {
  rooms: string[];
  clues: { [key: string]: string[] };

  //Define constructor for class

  constructor() {
    this.rooms = ["Library", "Kitchen", "Ballroom", "Study"];
    this.clues = {
      Library: ["A torn paper of a diary", "A hidden safe"],
      Kitchen: ["A bloody knife", "A suspicious note"],
      Ballroom: ["A broken chandelier", "Footprints"],
      Study: ["A letter opener", "A locked drawer"],
    };
  }

  //Creating an investigation function for the detective

  // Creating an investigation function for the detective
  investigateRoom(room: string): string[] {
    if (this.rooms.includes(room)) {
      return this.clues[room]; // Return the clues found in the room
    } else {
      console.log(chalk.redBright(`This room doesn't exist in the mansion`));
      return []; // Return an empty array if the room doesn't exist
    }
  }
}

export default Mansion;
