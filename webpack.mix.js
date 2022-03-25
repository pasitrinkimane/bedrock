let mix = require('laravel-mix');

require('@tinypixelco/laravel-mix-wp-blocks');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */

let sassOptions = {};
let themeName = 'growtype-child';
let fullThemePath = '/app/themes/' + themeName;

if (process.env.STATIC_URL !== undefined) {
    sassOptions['additionalData'] = '$STATIC_ASSETS_URL: "' + process.env.STATIC_URL + fullThemePath + '";'
} else {
    sassOptions['additionalData'] = '$STATIC_ASSETS_URL: "' + fullThemePath + '";'
}

/**
 * Child theme scripts
 */
mix
    .sass('web/app/themes/growtype-child/resources/styles/app-child.scss', 'styles', sassOptions)

mix.setPublicPath('./web/app/themes/growtype-child/public');
mix.setResourceRoot('./../')

mix
    .js('web/app/themes/growtype-child/resources/scripts/app-child.js', 'scripts')

mix
    .copyDirectory('web/app/themes/growtype-child/resources/images', 'web/app/themes/growtype-child/public/images')
    .copyDirectory('web/app/themes/growtype-child/resources/video', 'web/app/themes/growtype-child/public/video')
    .copyDirectory('web/app/themes/growtype-child/resources/icons', 'web/app/themes/growtype-child/public/icons')
    .copyDirectory('web/app/themes/growtype-child/resources/fonts', 'web/app/themes/growtype-child/public/fonts');

mix
    .sourceMaps()
    .version();
