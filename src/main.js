const Particle = require("particle-io");
const five = require("johnny-five");

const { saveWeather } = require('./utils/weather')

const { token, deviceId } = require('../secrets')

function onBoardReady() {
  var temperature = new five.Temperature({
    controller: "HTU21D",
    freq: 1000 * 5
  });

  temperature.on("change", function() {
    console.log("temperature");
    console.log("\tfahrenheit   : ", this.fahrenheit);
    console.log("\tcelsius   : ", this.celsius);
    console.log("--------------------------------------");
    saveWeather(this)
  });
}

async function run() {
  const board = new five.Board({
    io: new Particle({
      token,
      deviceId,
    })
  });

  board.on("ready", onBoardReady);
}

run()
