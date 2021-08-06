<?php

/*
 * This file is part of justoverclock/adsense-manager.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 * based on tweaked version from Matteo Contrini
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\AdsenseManager;

use Flarum\Extend;
use Flarum\Api\Event\Serializing;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
    (new Extend\Settings)
        ->serializeToForum('adsense-manager.ads.load', 'adsense-manager.ads.load')
        ->serializeToForum('adsense-manager.ads.show', 'adsense-manager.ads.show')
        ->serializeToForum('adsense-manager.ads.postsInterval', 'adsense-manager.ads.postsInterval')
        ->serializeToForum('adsense-manager.ads.betweenPosts', 'adsense-manager.ads.betweenPosts')
];
