import { expect } from "chai";
import Detective from "../src/character/detective";
import Mansion from "../src/locations/mansion";

//Describe the test suit
describe("Murder at the mansion game test", () => {
  //Test the detective class
  describe("Detective class", () => {
    it("Should initialize the correct name", () => {
      const detective = new Detective("Sherlock");
      expect(detective.name).to.equal("Sherlock");
    });

    it("Should start with an empty inventory", () => {
      const detective = new Detective("Sherlock");
      expect(detective.inventory).to.be.an("array").that.is.empty;
    });
  });

  // Test the Mansion class
  describe("Mansion Class", () => {
    it("should initialize with predefined rooms", () => {
      const mansion = new Mansion();
      expect(mansion.rooms).to.include.members([
        "Library",
        "Kitchen",
        "Ballroom",
        "Study",
      ]);
    });

    it("should provide clues for a valid room", () => {
      const mansion = new Mansion();
      const room = "Library";
      const clues = mansion.clues[room];
      expect(clues).to.include.members([
        "A torn paper of a diary",
        "A hidden safe",
      ]);
    });

    it("should not provide clues for an invalid room", () => {
      const mansion = new Mansion();
      const room = "Bathroom";
      expect(mansion.rooms).to.not.include(room);
    });
  });
});
