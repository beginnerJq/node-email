const Getdata = require('./index.js');
const Config = require('../config');

let one = new Getdata(Config.oneURL); // one 文章

let oneData = ($) => {
    let selectItem = $("#carousel-one .carousel-inner .item");
    let todayOne = selectItem[0];
    return {
        imgUrl: $(todayOne).find(".fp-one-imagen").attr("src"),
        type: $(todayOne).find(".fp-one-imagen-footer").text().trim(),
        text: $(todayOne).find(".fp-one-cita").text().trim()
    };
};

let get = () => {
    one.getElement().then($ => {
        console.log(oneData($));
    }).catch(err => {
        console.log(err);
        get(); // 重新获取
    });
};

module.exports = get;