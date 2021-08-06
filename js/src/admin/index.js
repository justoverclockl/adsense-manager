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


import app from 'flarum/admin/app';

app.initializers.add('justoverclock/adsense-manager', () => {
  app.extensionData
    .for('justoverclock-adsense-manager')
    .registerSetting({
      setting: 'adsense-manager.ads.load',
      label: 'Ads - Load AdSense',
      type: 'boolean'
    })
    .registerSetting({
      setting: 'adsense-manager.ads.show',
      label: 'Ads - Show',
      type: 'boolean'
    })
    .registerSetting(function () {
      return <div className="Form-group">
        <label>Adsense Code for head tags</label>
        <textarea className="FormControl" bidi={this.setting('adsense-manager.ads.generatedCode')}></textarea>
      </div>;
    })
    .registerSetting({
      setting: 'adsense-manager.ads.postsInterval',
      label: 'Ads - Posts interval',
      type: 'number'
    })
    .registerSetting(function () {
      return <div className="Form-group">
        <label>Ads - Between posts content</label>
        <textarea className="FormControl" bidi={this.setting('adsense-manager.ads.betweenPosts')}></textarea>
      </div>;
    })
    .registerSetting(function () {
      return <div className="Form-group">
        <label>Ads - Sidebar</label>
        <textarea className="FormControl" bidi={this.setting('adsense-manager.ads.sidebar')}></textarea>
      </div>;
    })
});
