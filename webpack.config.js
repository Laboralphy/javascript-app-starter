/**
 * Created by ralphy on 26/05/17.
 */
const path = require('path');

module.exports = {
    resolve: {
        alias: {
            libs: path.resolve(__dirname, 'libs')
        }
    },
    entry: {
        'app': path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: '[name].js'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
        ]
    },
    target: 'web'
};
