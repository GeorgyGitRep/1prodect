let title
let screens
let screenPrice
let rollback = 27
let adaptive

let service1
let servicePrice
let service2


let Otcat = 0;
let fullPrice = 0;
let servicePercentPrice = fullPrice - Otcat;
servicePercentPrice = Math.ceil(servicePercentPrice);

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые , сложные");
    adaptive = confirm("Нужен ли адаптив на сайте?", true);
    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    }
    while (!isNumber(screenPrice))

}
const getRollbackMessage = function () {
    if (fullPrice > 30000)
        console.log("Даем скидку в 10%");
    else if (fullPrice > 15000 && fullPrice <= 30000)
        console.log("Даем скидку в 5%");
    else if (fullPrice <= 15000 && fullPrice >= 0)
        console.log("Скидка не предусмотрена");
    else if (fullPrice < 0)
        console.log("Что то пошло не так")
}
const showTypeOf = function (variable) {
    console.log(variable, typeof variable)
}
let getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        }
        else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }
        do {
            servicePrice = prompt("Сколько это будет стоить?");
        }
        while (!isNumber(servicePrice))
        servicePrice = +servicePrice;
        sum += servicePrice;
    }
    return sum
};
function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices
};
function getTitle(title) {
    title = title.toLowerCase().trim();
    title = title.charAt(0).toUpperCase() + title.slice(1);
    return title
};
function getServicePercentPrices(fullPrice, Otcat) {
    return fullPrice - Otcat
}
asking();
title = getTitle(title);
let allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, Otcat);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

getRollbackMessage();

console.log(screens.toLowerCase().split(", "));
console.log(servicePercentPrice);
console.log("allServicePrices", allServicePrices);
