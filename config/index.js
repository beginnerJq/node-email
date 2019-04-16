const weatherURL = `https://tianqi.moji.com/weather/china/zhejiang/hangzhou`;
const oneURL = `http://wufazhuce.com/`;
//纪念日
let startDay = "2017/03/05";
//发送者邮箱厂家
let EmianService = "QQ";
//发送者邮箱账户SMTP授权码
let EamilAuth = {
    user: "xxx@qq.com",
    pass: "xxxxx"
};
//发送者昵称与邮箱地址
let EmailFrom = '"jiangqi" <xxx@qq.com>';

//接收者邮箱地
let EmailTo = "xxx@qq.com";

//邮件主题
let EmailSubject = "一封暖暖的邮件";

let hour = 5;
let minute = 20;
module.exports = {
    weatherURL,
    oneURL,
    startDay,
    EmianService,
    EamilAuth,
    EmailFrom,
    EmailTo,
    EmailSubject,
    hour,
    minute
}