const dayjs = require('dayjs');
const fetch = require('node-fetch');

(async () => {
  const timeStamp = await fetch(
    'http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp'
  )
    .then((res) => res.json())
    .then((json) => json.data.t);

  let today = dayjs(+timeStamp).locale('zh-cn');
  console.log(today.format());
})();
