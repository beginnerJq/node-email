const schedule = require("node-schedule"); //定时器任务库
const { hour, minute } = require('./config');
const post = require('./postemail');

let rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(0, 6)];
rule.hour = hour;
rule.minute = minute;

console.log('等待执行任务......');
let j = schedule.scheduleJob(rule, function () {
    post(); // 定时发送邮件
    console.log('发送邮件成功');
});