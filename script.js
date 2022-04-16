
const AppData = {
    screens: "",
    screenPrice: 0,
    title: "",
    rollback: 27,
    adaptive: true,
    service1: "",
    servicePrice: 0,
    service2: "",
    fullPrice: 0,
    servicePercentPrice:0,
    allServicePrices:0,
    asking: function () {
        AppData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
        AppData.screens = prompt("Какие типы экранов нужно разработать?", "Простые , сложные");
        AppData.adaptive = confirm("Нужен ли адаптив на сайте?", true);
        do {
            AppData.screenPrice = prompt("Сколько будет стоить данная работа?");
        }
        while (!isNumber(AppData.screenPrice))

    },
    const: isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    const: getRollbackMessage = function () {
        if (AppData.fullPrice > 30000)
            console.log("Даем скидку в 10%");
        else if (AppData.fullPrice > 15000 && AppData.fullPrice <= 30000)
            console.log("Даем скидку в 5%");
        else if (AppData.fullPrice <= 15000 && AppData.fullPrice >= 0)
            console.log("Скидка не предусмотрена");
        else if (AppData.fullPrice < 0)
            console.log("Что то пошло не так")
    },
    const: showTypeOf = function (variable) {
        console.log(variable, typeof variable)
    },


    const: getAllServicePrices = function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                AppData.service1 = prompt("Какой дополнительный тип услуги нужен?");
            }
            else if (i === 1) {
                AppData.service2 = prompt("Какой дополнительный тип услуги нужен?");
            }
            do {
                AppData.servicePrice = prompt("Сколько это будет стоить?");
            }
            while (!isNumber(AppData.servicePrice))
            AppData.servicePrice = +AppData.servicePrice;
            sum += AppData.servicePrice;
        }
        AppData.allServicePrices= sum
        return AppData.allServicePrices
    },


    getFullPrice: function (screenPrice, allServicePrices) {
        AppData.fullPrice= +screenPrice + allServicePrices
    },


    getTitle: function (title) {
        title = title.toLowerCase().trim();
        title = title.charAt(0).toUpperCase() + title.slice(1);
        AppData.title =  title
    },
    getServicePercentPrices: function (fullPrice, rollback) {
        AppData.servicePercentPrice =  Math.ceil(+(fullPrice - rollback))
        return this.servicePercentPrice

    },
    logger: function () {
        showTypeOf(AppData.title);
        showTypeOf(AppData.fullPrice);
        showTypeOf(AppData.adaptive);
        console.log(AppData.screens.toLowerCase().split(", "));
        console.log(this.servicePercentPrice);
        console.log("allServicePrices", this.allServicePrices);
        for (let index in AppData) {
            console.log(index + " " + AppData[index]);
        }
    },
    start: function () {
        this.asking();
        this.getTitle(this.title);
        getAllServicePrices();
        this.getFullPrice(AppData.screenPrice, this.allServicePrices);
        this.getServicePercentPrices(AppData.fullPrice, AppData.rollback);
        getRollbackMessage();
        this.getServicePercentPrices(AppData.fullPrice, AppData.rollback)
        this.logger();
    },
}

AppData.start();











