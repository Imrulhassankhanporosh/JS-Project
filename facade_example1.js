// Subsystem Classes
class TV {
    turnOn() {
        console.log("TV is ON");
    }
    turnOff() {
        console.log("TV is OFF");
    }
}

class SoundSystem {
    turnOn() {
        console.log("Sound System is ON");
    }
    turnOff() {
        console.log("Sound System is OFF");
    }
}

class DVDPlayer {
    play() {
        console.log("DVD Player is playing");
    }
    stop() {
        console.log("DVD Player is stopped");
    }
}

class Lights {
    dim() {
        console.log("Lights are dimmed");
    }
    brighten() {
        console.log("Lights are brightened");
    }
}

// Facade Class

// The HomeTheaterFacade class acts as the facade (simplified interface) for the home theater system.
// Its constructor accepts instances of the TV, SoundSystem, DVDPlayer, and Lights classes and stores them as properties.


class HomeTheaterFacade {
    constructor(tv, soundSystem, dvdPlayer, lights) {
        this.tv = tv;
        this.soundSystem = soundSystem;
        this.dvdPlayer = dvdPlayer;
        this.lights = lights;
    }

    startMovie() {
        console.log("\nStarting the Movie...");
        this.lights.dim();
        this.tv.turnOn();
        this.soundSystem.turnOn();
        this.dvdPlayer.play();
    }

    stopMovie() {
        console.log("\nStopping the Movie...");
        this.dvdPlayer.stop();
        this.soundSystem.turnOff();
        this.tv.turnOff();
        this.lights.brighten();
    }
}

// Client Code

// Creates instances of the subsystem classes (TV, SoundSystem, DVDPlayer, and Lights).

const tv = new TV();
const soundSystem = new SoundSystem();
const dvdPlayer = new DVDPlayer();
const lights = new Lights();

// Creates an instance of the HomeTheaterFacade class and passes the subsystem instances to it.
// The facade instance now has access to all subsystems.

const homeTheater = new HomeTheaterFacade(tv, soundSystem, dvdPlayer, lights);

// Using the Facade
homeTheater.startMovie();
homeTheater.stopMovie();
