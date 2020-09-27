/* module.exports = function (content) {
    return content.replace(/debugger/g,'');
}
 */
module.exports = function (content, map, meta) {
    this.query.showLog ? console.log('remove debugger') : null;
    this.callback(null, content.replace(/debugger/g, ''), map, meta);
    return;
};