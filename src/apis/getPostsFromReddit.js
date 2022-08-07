import {View, Text} from 'react-native';
import React from 'react';
import axios from 'axios';

const getPostsFromReddit = async After => {
  console.log('Getting Posts from Reddit...');

  return await axios
    .get(`https://www.reddit.com/r/reactnative/hot.json?limit=5&after=${After}`)
    .then(data => {
      const Data = {
        after: data.data.data.after,
        postData: data.data.data.children,
      };
      return Data;
    })
    .catch(error => {
      console.log(error);
      return false;
    });
};

export default getPostsFromReddit;

const ss = {
  all_awardings: [],
  allow_live_comments: false,
  approved_at_utc: null,
  approved_by: null,
  archived: false,
  author: 'quadrified',
  author_flair_background_color: null,
  author_flair_css_class: null,
  author_flair_richtext: [],
  author_flair_template_id: null,
  author_flair_text: null,
  author_flair_text_color: null,
  author_flair_type: 'text',
  author_fullname: 't2_2zsbty1w',
  author_is_blocked: false,
  author_patreon_flair: false,
  author_premium: false,
  awarders: [],
  banned_at_utc: null,
  banned_by: null,
  can_gild: false,
  can_mod_post: false,
  category: null,
  clicked: false,
  content_categories: null,
  contest_mode: false,
  created: 1659597659,
  created_utc: 1659597659,
  discussion_type: null,
  distinguished: null,
  domain: 'i.redd.it',
  downs: 0,
  edited: false,
  gilded: 0,
  gildings: {},
  hidden: false,
  hide_score: false,
  id: 'wfupw0',
  is_created_from_ads_ui: false,
  is_crosspostable: false,
  is_meta: false,
  is_original_content: false,
  is_reddit_media_domain: true,
  is_robot_indexable: true,
  is_self: false,
  is_video: false,
  likes: null,
  link_flair_background_color: '#dadada',
  link_flair_css_class: 'help',
  link_flair_richtext: [{e: 'text', t: 'Help'}],
  link_flair_template_id: '7b3da8c4-04e9-11e5-84fa-0e2ace68806f',
  link_flair_text: 'Help',
  link_flair_text_color: 'dark',
  link_flair_type: 'richtext',
  locked: false,
  media: null,
  media_embed: {},
  media_only: false,
  mod_note: null,
  mod_reason_by: null,
  mod_reason_title: null,
  mod_reports: [],
  name: 't3_wfupw0',
  no_follow: true,
  num_comments: 2,
  num_crossposts: 0,
  num_reports: null,
  over_18: false,
  parent_whitelist_status: 'all_ads',
  permalink:
    '/r/reactnative/comments/wfupw0/on_connecting_to_vpn_reactnativewebview_fails_to/',
  pinned: false,
  post_hint: 'image',
  preview: {enabled: true, images: [[Object]]},
  pwls: 6,
  quarantine: false,
  removal_reason: null,
  removed_by: null,
  removed_by_category: null,
  report_reasons: null,
  saved: false,
  score: 1,
  secure_media: null,
  secure_media_embed: {},
  selftext: '',
  selftext_html: null,
  send_replies: true,
  spoiler: false,
  stickied: false,
  subreddit: 'reactnative',
  subreddit_id: 't5_37k5y',
  subreddit_name_prefixed: 'r/reactnative',
  subreddit_subscribers: 94096,
  subreddit_type: 'public',
  suggested_sort: null,
  thumbnail:
    'https://b.thumbs.redditmedia.com/dR8jCI_8NNYCsKxYK_SdASodx_ACAwCwCNWNpALqecE.jpg',
  thumbnail_height: 140,
  thumbnail_width: 140,
  title:
    'On connecting to VPN, react-native-webview fails to load the url. Anyone else facing this?',
  top_awarded_type: null,
  total_awards_received: 0,
  treatment_tags: [],
  ups: 1,
  upvote_ratio: 1,
  url: 'https://i.redd.it/c3nk4jrdenf91.png',
  url_overridden_by_dest: 'https://i.redd.it/c3nk4jrdenf91.png',
  user_reports: [],
  view_count: null,
  visited: false,
  whitelist_status: 'all_ads',
  wls: 6,
};
