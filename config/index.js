const weatherURL = [
  `https://tianqi.moji.com/weather/china/zhejiang/quzhou`,
  `https://tianqi.moji.com/weather/china/zhejiang/hangzhou`,
];
const oneURL = [`http://wufazhuce.com/`];
//纪念日
let startDay = '2017/03/05';
//发送者邮箱厂家
let EmianService = 'QQ';
//发送者邮箱账户SMTP授权码
let EamilAuth = {
  user: '1292692959@qq.com',
  pass: process.argv[2] || '',
};
//发送者昵称与邮箱地址
let EmailFrom = '"jiangqi" <1292692959@qq.com>';

//接收者邮箱地
// let EmailTo = '1064490167@qq.com';
let EmailTo = '1292692959@qq.com';

//邮件主题
let EmailSubject = '一封暖暖的邮件';

module.exports = {
  weatherURL,
  oneURL,
  startDay,
  EmianService,
  EamilAuth,
  EmailFrom,
  EmailTo,
  EmailSubject,
};
