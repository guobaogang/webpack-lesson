class BuildInfoPlugin {
    constructor(options) {
        this.options = options
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('BuildInfoPlugin', (compilation, callback) => {
            const filelist = 'build by ' + this.options.name;
            debugger
            compilation.assets['buildInfo.txt'] = {
                source: function () {
                    return filelist;
                },
                size: function () {
                    return filelist.length;
                }
            };

            callback();
        });

        compiler.hooks.done.tap('BuildInfoPlugin', (stats) => {
            console.log(stats);
            console.log('打包结束了...');
        })
    };

}

module.exports = BuildInfoPlugin;