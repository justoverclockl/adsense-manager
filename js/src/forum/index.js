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

import app from 'flarum/app';
import addAds from "./addAds";

app.initializers.add('justoverclock/adsense-manager', () => {
  addAds();
});
