import {View, Text} from 'react-native';
import React from 'react';
import axios from 'axios';

const getCommentsOfThePost = async permalink => {
  console.log('Getting Comments from Reddit...');

  return await axios
    .get(`https://www.reddit.com${permalink}.json`)
    .then(data => {
      const result = [];
      const _Data = data.data[1].data.children;
      _Data.forEach((item, index) => {
        item.data.body &&
          result.push({
            text: item.data.body,
            author: item.data.author,
          });
      });
      return result;
    })
    .catch(error => {
      console.log(error);
      return false;
    });
};

export default getCommentsOfThePost;
