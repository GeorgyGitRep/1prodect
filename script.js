const AppData = {
    screens: [],
    screenPrice: 0,
    title: "",
    rollback: 27,
    adaptive: true,
    services: {},
    servicePrice: 0,
    fullPrice: 0,
    servicePercentPrice:0,
    allServicePrices:0,
    asking: function () {
        do{
            AppData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
        }
       while(isNumber(AppData.title));
        //AppData.screens = prompt("Какие типы экранов нужно разработать?", "Простые , сложные");
        AppData.adaptive = confirm("Нужен ли адаптив на сайте?", true);
      
        
        for (let i = 0; i < 2; i++){
            let name
            do{
            name =  prompt("Какие типы экранов нужно разработать?");
            }
            while(isNumber(name));
            let price = 0;
            do {
                price = prompt("Сколько будет стоить данная работа?");
            }
            while (!isNumber(price));
            this.screens.push({id:i,name:name,price:price})
        }
        
        for(let screen of AppData.screens){
            AppData.screenPrice += +screen.price;
            
        }

        for (let i = 0; i < 2; i++) {
            let name;
            do{
               name = prompt("Какой дополнительный тип услуг нужен?");  
            }
            while(isNumber(name));
            let price = 0;
           
            do {
                price = prompt("Сколько это будет стоить?");
            }
            while (!isNumber(price))
            AppData.services[name] = +price;
        }

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
       for(let key in AppData.services){
        AppData.allServicePrices += AppData.services[key];
       }
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
        //console.log(AppData.screens.toLowerCase().split(", "));
        console.log(this.servicePercentPrice);
        console.log("allServicePrices", this.allServicePrices);
        for (let index in AppData) {
            console.log(index + " " + AppData[index]);
        }
        console.log(this.screens);
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











