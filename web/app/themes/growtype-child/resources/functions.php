<?php

function child_theme_scripts()
{

}

add_action('wp_enqueue_scripts', 'child_theme_scripts');

/**
 * Helper function for prettying up errors
 * @param string $message
 * @param string $subtitle
 * @param string $title
 */
$sage_error = function ($message, $subtitle = '', $title = '') {
    $title = $title ?: __('Growtype &rsaquo; Error', 'growtype');
    $footer = 'Growtype';
    $message = "<h1>{$title}<br><small>{$subtitle}</small></h1><p>{$message}</p><p>{$footer}</p>";
    wp_die($message, $title);
};

/**
 * Growtype required files
 *
 * The mapped array determines the code library included in your theme.
 * Add or remove files to the array as needed. Supports child theme overrides.
 */
array_map(function ($file) use ($sage_error) {
    $file = "../app/{$file}.php";
    if (!locate_template($file, true, true)) {
        $sage_error(sprintf(__('Error locating <code>%s</code> for inclusion.', 'growtype'), $file), 'File not found');
    }
}, ['helpers-child']);

/**
 * Overwrite template function for child theme
 */
add_filter('template', function ($stylesheet) {
    $this_theme = wp_get_theme();
    return $this_theme['Template'];
});
