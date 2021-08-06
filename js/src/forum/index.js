import app from 'flarum/app';
import addAds from "./addAds";

app.initializers.add('justoverclock/adsense-manager', () => {
  addAds();
});
