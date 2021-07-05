const nodemailer = require('nodemailer'); //发送邮件的node插件
const dayjs = require('dayjs');
const template = require('art-template');
const inlineCss = require('inline-css'); // 将css嵌入行内
const { join } = require('path');
let {
  startDay,
  EmianService,
  EamilAuth,
  EmailFrom,
  EmailTo,
  EmailSubject,
} = require('../config');
let moji = require('../getdata/moji.js');
let one = require('../getdata/one.js');

let pollutionLevel = {
  level_1: '#8fc31f',
  level_2: '#d7af0e',
  level_3: '#f39800',
  level_4: '#e2361a',
  level_5: '#5f52a0',
  level_6: '#631541',
};

let post = async () => {
  let today = dayjs().add(8, 'hour');

  console.log(today.format());

  let lastDay = Math.floor(
    (new Date(today.format()) - new Date(startDay)) / 1000 / 60 / 60 / 24
  ); // 天数
  today = `${today.year()} / ${today.month() + 1} / ${today.date()}`;

  let html = template(join(__dirname, '..', 'views/index.html'), {
    moji: await moji(),
    one: await one(),
    lastDay,
    today,
    pollutionLevel,
  });
  let transporter = nodemailer.createTransport({
    service: EmianService, // 发送者的邮箱厂商，支持列表：https://nodemailer.com/smtp/well-known/
    port: 465, // SMTP 端口
    secureConnection: true, // SSL安全链接
    auth: {
      //发送者的账户密码
      user: EamilAuth.user, //账户
      pass: EamilAuth.pass, //smtp授权码，到邮箱设置下获取
    },
  });

  let mailOptions = {
    from: EmailFrom, // 发送者昵称和地址
    to: EmailTo, // 接收者的邮箱地址
    subject: EmailSubject, // 邮件主题
    html: await inlineCss(await html, { url: ' ' }), //邮件的html
  };

  //发送邮件
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      post(); // 再次发送
    }
    console.log('邮件发送成功 ID：', info.messageId);
  });
};

module.exports = post;
