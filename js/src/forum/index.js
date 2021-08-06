import app from 'flarum/app';
import {extend} from 'flarum/common/extend';
import addAds from "./addAds";
import Page from "flarum/common/components/Page";

app.initializers.add('justoverclock/adsense-manager', () => {
  extend(Page.prototype, 'oncreate', addAds);
});
