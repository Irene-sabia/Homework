"use strict";

// 1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії):

const car = {
  title: "Chery",
  model: "Elara",
  year: 2008,
  averageSpeed: 85,
  fuelTankCapacity: 52,
  fuelConsumption: 11,
  drivers: ["Iryna"],

  checkDrivers: function (name) {
    return this.drivers.includes(name);
  },

  calculateTrip(distance, speed) {
    let drivingTime = distance / speed;
    let stops = Math.floor(drivingTime / 4);
    let totalTime = drivingTime + stops;
    let fuelNeeded = (distance / 100) * this.fuelConsumption;

    return {
      totalTime: totalTime.toFixed(2),
      fuelNeeded: fuelNeeded.toFixed(2),
    };
  },
};

console.log(car);

car.drivers.push("Alex");

console.log(car.checkDrivers("Andrii"));
console.log(car.checkDrivers("Iryna"));

console.log(car.calculateTrip(680, 100));

// 2. Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:

const time = {
  hours: 20,
  minutes: 59,
  seconds: 45,

  // Виведення часу у форматі HH:MM:SS
  displayTime() {
    const h = String(this.hours).padStart(2, "0");
    const m = String(this.minutes).padStart(2, "0");
    const s = String(this.seconds).padStart(2, "0");
    console.log(`${h}:${m}:${s}`);
  },

  addSeconds(sec) {
    this.seconds += sec;

    this.minutes += Math.floor(this.seconds / 60);
    this.seconds = this.seconds % 60;

    this.hours += Math.floor(this.minutes / 60);
    this.minutes = this.minutes % 60;

    this.hours = this.hours % 24;
  },

  addMinutes(min) {
    this.minutes += min;

    this.hours += Math.floor(this.minutes / 60);
    this.minutes = this.minutes % 60;

    this.hours = this.hours % 24;
  },

  addHours(hr) {
    this.hours = (this.hours + hr) % 24;
  },
};

console.log(time.hours, ":", time.minutes, ":", time.seconds);
time.displayTime();

time.addSeconds(40);
time.displayTime();

time.addMinutes(20);
time.displayTime();

time.addHours(5);
time.displayTime();
