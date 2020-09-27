const loaderUtils = require('loader-utils');

module.exports = function (content, map, meta) {
    const callback = this.async();
    const options = loaderUtils.getOptions(this);
    return setTimeout(() => {
        callback(null, content.replace(/hello/g, 'hello ' + options.name), map, meta);
    }, 1000);
};