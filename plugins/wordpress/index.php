<?php
/*
Plugin Name: Brizy Extends
Description: Extends Brizy Elements
Author: Brizy
Version: 1.0.0
Author URI: http://brizy.io
*/

define('PLUGIN_FILE', __FILE__);
define('PLUGIN_PATH', dirname(PLUGIN_FILE));
define('PLUGIN_URL', rtrim(plugin_dir_url(PLUGIN_FILE), "/"));
define('PLUGIN_VERSION', '1.0.0');

add_filter('brizy_extensions', 'registerExtension');
add_filter('brizy_preview_enqueue_scripts', 'enqueuePreviewAssets');

function registerExtension($extensions)
{
    $scriptUrl = PLUGIN_URL . "/widgets/build/main.js";
    $styleUrl = PLUGIN_URL . "/widgets/build/index.css";
    $myExtension = new Brizy_Editor_ThirdParty_Extension([$scriptUrl], [$styleUrl], PLUGIN_VERSION);

    $extensions[] = $myExtension;

    return $extensions;
}


function enqueuePreviewAssets($post)
{
    $styleUrl = PLUGIN_URL . "/widgets/build/index.css";
    wp_enqueue_style('brizy-custom-components', $styleUrl, array(), PLUGIN_VERSION);
}
