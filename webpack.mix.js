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
let themeName = process.env.MIX_BUILD === 'child' ? 'growtype-child' : 'growtype';
let fullThemePath = '/app/themes/' + themeName;

if (process.env.STATIC_URL !== undefined) {
    sassOptions['additionalData'] = '$STATIC_ASSETS_URL: "' + process.env.STATIC_URL + fullThemePath + '";'
} else {
    sassOptions['additionalData'] = '$STATIC_ASSETS_URL: "' + fullThemePath + '";'
}

if (process.env.MIX_BUILD === 'child') {
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
} else {
    /**
     * Parent theme scripts
     */

    mix.setPublicPath('./web/app/themes/growtype/public');
    mix.setResourceRoot('./../')

    mix
        .sass('web/app/themes/growtype/resources/styles/app.scss', 'styles', sassOptions)

        .sass('web/app/themes/growtype/resources/styles/frontend-block-editor.scss', 'styles', sassOptions)
        .sass('web/app/themes/growtype/resources/styles/admin-block-editor.scss', 'styles', sassOptions)
        .sass('web/app/themes/growtype/resources/styles/admin-general.scss', 'styles', sassOptions)
        .sass('web/app/themes/growtype/resources/styles/admin-standard-editor.scss', 'styles', sassOptions)

        .sass('web/app/themes/growtype/resources/styles/plugins/woocommerce/woocommerce.scss', 'styles', sassOptions)

    mix.autoload({
        jquery: ['$', 'window.jQuery']
    })

    mix
        .js('web/app/themes/growtype/resources/scripts/app.js', 'scripts')
        .js('web/app/themes/growtype/resources/scripts/plugins/woocommerce/wc-cart.js', 'scripts')
        .js('web/app/themes/growtype/resources/scripts/plugins/woocommerce/wc-main.js', 'scripts')
        .js('web/app/themes/growtype/resources/scripts/plugins/woocommerce/wc-wishlist.js', 'scripts')
        .js('web/app/themes/growtype/resources/scripts/plugins/woocommerce/wc-checkout.js', 'scripts')
        .js('web/app/themes/growtype/resources/scripts/plugins/woocommerce/wc-login.js', 'scripts')
        .js('web/app/themes/growtype/resources/scripts/plugins/woocommerce/wc-coupon.js', 'scripts')

        .js('web/app/themes/growtype/resources/scripts/plugins/acf/acf-main.js', 'scripts')
        .js('web/app/themes/growtype/resources/scripts/plugins/slick-carousel/slick-main.js', 'scripts')
        
        .version();

    mix
        .scripts(['web/app/themes/growtype/resources/scripts/plugins/cookie/cookie.js'], 'web/app/themes/growtype/public/scripts/cookie.js')

    mix
        .copyDirectory('web/app/themes/growtype/resources/images', 'web/app/themes/growtype/public/images')
        .copyDirectory('web/app/themes/growtype/resources/icons', 'web/app/themes/growtype/public/icons')

        .copyDirectory('web/app/themes/growtype/resources/fonts/icons/', 'web/app/themes/growtype/public/fonts/icons')
        .copyDirectory('web/app/themes/growtype/resources/fonts/plugins/woocommerce', 'web/app/themes/growtype/public/styles/fonts')

        .copyDirectory('web/app/themes/growtype/resources/video', 'web/app/themes/growtype/public/video');

    mix.copy('node_modules/@fancyapps/', 'web/app/themes/growtype/public/vendor/@fancyapps')
        .copy('node_modules/jquery/', 'web/app/themes/growtype/public/vendor/jquery')
        .copy('node_modules/slick-carousel/', 'web/app/themes/growtype/public/vendor/slick-carousel')
        .copy('node_modules/chosen-js/', 'web/app/themes/growtype/public/vendor/chosen-js')
        .copy('node_modules/select2/', 'web/app/themes/growtype/public/vendor/select2');

    mix
        .sourceMaps()
        .version();
}
