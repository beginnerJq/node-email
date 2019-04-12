const superagent = require('superagent'); //发送网络请求获取DOM
const cheerio = require('cheerio'); //能够像Jquery一样方便获取DOM节点

module.exports = class {
    constructor(url) {
        this.url = url;
    }
    getHtml() {
        return new Promise((resolve, reject) => {
            superagent.get(this.url).end((err, res) => {
                err && reject(err);
                resolve(res.text);
            });
        });
    }
    /**
     * @returns {Promise}
     */
    getElement() {
        return this.getHtml()
            .then(res => {
                return cheerio.load(res);
            });
    }
};