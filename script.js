let title = "JS code"
let screens = "Простые, Сложные, Интерактивные"
let screenPrice = 30
let rollback = 27
let fullPrice = 10.0
let adaptive = true
alert("Hello world !");
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));
