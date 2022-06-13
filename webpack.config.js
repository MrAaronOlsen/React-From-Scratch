const path = require('path')

module.exports = () => {
    return {
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
       }
    }
}