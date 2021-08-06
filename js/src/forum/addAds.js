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

import {extend} from 'flarum/common/extend';
import app from 'flarum/forum/app';
import PostStream from 'flarum/forum/components/PostStream';

export default function () {
  extend(PostStream.prototype, 'view', function (component) {
    if (app.forum.attribute('adsense-manager.ads.show') !== '1') {
      return;
    }

    const advertisement = app.forum.attribute('adsense-manager.ads.betweenPosts') || 'Pubblicità.';

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


  function evalAdsJs() {
    this.$('.adsense-manager-between-posts script').each(function () {
      if (!$(this).data('executed')) {
        eval.call(window, $(this).text());
        $(this).data('executed', true);
      }
    });
  }
}

