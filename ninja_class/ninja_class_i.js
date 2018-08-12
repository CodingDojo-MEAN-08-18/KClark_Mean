// Assignment: Ninja Class
// Karen Clark
// 2018-08-11
// Create a new object constructor called Ninja with the following attributes:
// * name
// * health
// * speed (private)
// * strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.
// Ninja should have the following methods:
// * sayName() - This should log that Ninja's name to the console.
// * showStats() - This should show the Ninja's name, strength, speed, and health.
// * drinkSake() - This should add +10 Health to the Ninja

function Ninja(name) {
    var ninja = {};
    var self = this;
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;

    this.sayName = function() {
        console.log("My ninja name is " + this.name + "!");
    }

    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }

    this.drinkSake = function() {
        this.health += 10;
    }
}

var ninja1 = new Ninja("Morimoto");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
