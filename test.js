const dayjs = require('dayjs');

(async () => {
  let today = dayjs();
  console.log(today.format());
})();
