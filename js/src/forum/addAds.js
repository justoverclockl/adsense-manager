import {extend} from 'flarum/common/extend';
import app from 'flarum/forum/app';
import PostStream from 'flarum/forum/components/PostStream';
import IndexPage from 'flarum/forum/components/IndexPage';

export default function () {
  extend(PostStream.prototype, 'view', function (component) {
    if (app.forum.attribute('adsense-manager.ads.show') !== '1') {
      return;
    }

    const advertisement = app.forum.attribute('adsense-manager.ads.betweenPosts') || 'Advertisement.';

    if (advertisement && component.children.length) {
      const between = parseInt(app.forum.attribute('adsense-manager.ads.postsInterval') || 5);

      const postIds = this.discussion.postIds();
      const postsAfterWhichPlaceAds = [];

      for (let i = 0; i <= postIds.length - 2; i++) {
        if (i % between === 0) {
          postsAfterWhichPlaceAds.push(postIds[i]);
        }
      }

      // Insert an inside every n comment
      component.children.forEach((post) => {
        if (postsAfterWhichPlaceAds.includes(post.attrs['data-id'])) {
          post.children.push(
            m('div.adsense-manager-fake-poststream-item',
              m('article.Post.EventPost',
                m('div.adsense-manager-between-posts.EventPost-info', m.trust(advertisement))
              )
            )
          );
        }
      });
    }
  });

  extend(PostStream.prototype, 'oncreate', evalAdsJs);
  extend(PostStream.prototype, 'onupdate', evalAdsJs);

  extend(IndexPage.prototype, 'sidebarItems', function (items) {
    const advertisement = app.forum.attribute('adsense-manager.ads.sidebar');

    if (advertisement && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
      // TODO: this doesn't work, no js is run
      items.add('adsense-manager-ad', m.trust(advertisement));
    }
  });
}

function evalAdsJs() {
  this.$('.adsense-manager-between-posts script').each(function () {
    if (!$(this).data('executed')) {
      eval.call(window, $(this).text());
      $(this).data('executed', true);
    }
  });
}
