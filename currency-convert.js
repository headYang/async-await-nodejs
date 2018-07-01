const axios = require('axios');

const getExchangeRate = async (from, to) => {
    try {
        const response = await axios.get('http://data.fixer.io/api/latest?access key=d32');
        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rates[to];
        return rate;
    } catch {
        throw new Error(`Unable to get exchange rate for ${from} to ${to}.`)
    }
    
};

getExchangeRate('USD', 'CAD').then((rate) => {
    console.log(rate);
}).catch((e) => {
    console.log(e);
});

const doWork = async () => {
    return mydata;
};

doWork().then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(`something went wrong`);
});

