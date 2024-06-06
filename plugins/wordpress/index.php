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

function registerExtension($extensions)
{
    $configFile = PLUGIN_PATH . "/widgets/build/config.json";
    $myExtension = new Brizy_Editor_ThirdParty_Extension(PLUGIN_URL."/widgets/build/", $configFile);

    $extensions[] = $myExtension;

    return $extensions;
}

