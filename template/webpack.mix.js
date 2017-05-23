const path = require('path');
const { mix } = require('laravel-mix');
mix.options({notifications: false, processCssUrls: false});
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "{{ output }}")
    }
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/main.js', '{{ output }}/assets/js/')
   .sass('src/style.scss', '{{ output }}/assets/css/')
   .extract([
        'vue'
    ])
   .copy('src/index.html', '{{ output }}/')
   .copyDirectory('src/assets', '{{ output }}/assets/');