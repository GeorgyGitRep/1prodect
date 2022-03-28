let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = prompt("Сколько будет стоить данная работа?");
let rollback = 27
let fullPrice = 10.0
let adaptive = confirm("Нужен ли адаптив на сайте?");
alert("Hello world !");
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));
