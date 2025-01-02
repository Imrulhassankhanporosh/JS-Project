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
const tv = new TV();
const soundSystem = new SoundSystem();
const dvdPlayer = new DVDPlayer();
const lights = new Lights();

const homeTheater = new HomeTheaterFacade(tv, soundSystem, dvdPlayer, lights);

// Using the Facade
homeTheater.startMovie();
homeTheater.stopMovie();
