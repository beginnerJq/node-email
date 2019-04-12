const Getdata = require('./index.js');
const Config = require('../config');

let moji = new Getdata(Config.weatherURL); // 墨迹天气

let mojiWeather = ($) => { //  墨迹天气提示 以及 未来三天天气预报
    let mojiWeatherTips = () => {
        let tips = $('.wea_tips');
        return tips.find('em').text();
    };
    let mojiWeatherData = () => {
        let threeWeather = []; // 三天的天气存储 
        let data = $('.forecast .days');
        data.each((index, value) => {
            let singleDay = $(value).find('li');
            threeWeather.push({
                day: singleDay.eq(0).text().trim(), // 今天 明天 后天
                img: singleDay.eq(1).find('img').attr('src'), // 天气图片 
                text: singleDay.eq(1).text().trim(), // 天气 
                temperature: singleDay.eq(2).text().trim(), // 温度
                windDirection: singleDay.eq(3).find('em').text().trim(), // 风向
                windLevel: singleDay.eq(3).find('b').text().trim(), // 风力等级
                pollution: singleDay.eq(4).text().trim(), // 污染
                pollutionLevel: singleDay.eq(4).find('strong').attr('class') // 污染等级
            });
        });
        return threeWeather;
    };
    return [
        mojiWeatherTips(),
        mojiWeatherData()
    ]
};

let get = () => {
    moji.getElement().then($ => {
        return mojiWeather($);
    }).catch(err => {
        console.log(err);
        get(); //catch 再次请求
    });
};

module.exports = get;





