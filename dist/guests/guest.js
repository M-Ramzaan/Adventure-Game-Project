// guests.ts
// Define the Guest class
export class Guest {
    name;
    isMurderer;
    constructor(name, isMurderer = false) {
        this.name = name;
        this.isMurderer = isMurderer;
    }
}
// Define your guests
export const guests = [
    new Guest("Ramzan Akram"),
    new Guest("Hassan Shehzad"),
    new Guest("Sheraz"),
    // Add more guests as needed
    new Guest("Waqar", true), // Waqar is the murderer
];
