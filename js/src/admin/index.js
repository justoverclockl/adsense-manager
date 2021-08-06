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
