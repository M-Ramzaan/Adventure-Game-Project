import chalk from "chalk";
export class Detective {
    name;
    inventory;
    health;
    constructor(name) {
        this.name = name;
        this.inventory = [];
        this.health = 100; // Initialize initial health points
    }
    investigate(location) {
        console.log(chalk.yellowBright(`${this.name} investigates ${location}.`));
        // Logic to be created for investigation
    }
    pickupItem(item) {
        console.log(chalk.yellowBright(`${this.name} picks up ${item}`));
        this.inventory.push(item);
    }
    useItem(item) {
        console.log(chalk.yellowBright(`${this.name} uses ${item}`));
        // Logic to be created for using items
    }
    interrogate(suspect) {
        console.log(chalk.yellowBright(`${this.name} interrogates ${suspect}`));
        // Logic to be created for interrogation
    }
}
export default Detective;
