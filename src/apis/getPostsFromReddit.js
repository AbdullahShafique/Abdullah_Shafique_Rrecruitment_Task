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
