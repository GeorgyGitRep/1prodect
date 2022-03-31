let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 27
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let Otcat = 0;
let fullPrice = 0;
let servicePercentPrice = fullPrice - Otcat;
servicePercentPrice = Math.ceil(servicePercentPrice);
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
let getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2
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
title = getTitle(title);
let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, Otcat);
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
getRollbackMessage();
console.log(screens.toLowerCase().split(", "));
console.log(servicePercentPrice);

