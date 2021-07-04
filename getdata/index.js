const superagent = require('superagent'); //发送网络请求获取DOM
const cheerio = require('cheerio'); //能够像Jquery一样方便获取DOM节点

module.exports = class {
  /**
   *
   * @param {string[]} url
   */
  constructor(url) {
    this.url = url;
  }
  getHtml() {
    return Promise.all(
      this.url.map(
        (url) =>
          new Promise((resolve, reject) => {
            superagent.get(url).end((err, res) => {
              err && reject(err);
              resolve(res.text);
            });
          })
      )
    );
  }
  /**
   * @returns {Promise}
   */
  getElement() {
    return this.getHtml().then((resList) => {
      return resList.map((res) => cheerio.load(res));
    });
  }
};
