import app from 'flarum/app';
import {extend} from 'flarum/common/extend';
import addAds from "./addAds";
import CommentPost from "flarum/forum/components/CommentPost";

app.initializers.add('justoverclock/adsense-manager', () => {
  extend(CommentPost.prototype, 'headerItems', addAds);
});
