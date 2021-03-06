const MovingObject = require("./moving_object");
const Util = require("./util.js");


function Asteroid(obj) {
    const colors = ["blue", "black", "green", "brown", "yellow", "orange", "red", "purple", "white"];
    if(!obj.color) obj.color = colors[Math.floor(Math.random()*colors.length)];
    if(!obj.radius) obj.radius = 10;
    MovingObject.call(this, obj);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;