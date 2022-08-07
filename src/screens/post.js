import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import moment from 'moment';
import PostHeader from '../components/headers/postHeader';
import colors from '../globalStyles/colors';

const Post = ({route, navigation}) => {
  const {postNumber} = route.params;
  const {Posts} = useSelector(state => state.redditPosts);
  const {title, thumbnail, thumbnail_height, selftext, author, created} =
    Posts[postNumber].data;
  console.log('postNumber', postNumber, Posts[postNumber].data);
  return (
    <ScrollView style={styles.container}>
      {/* Top Image */}
      {thumbnail_height ? (
        <View
          style={{width: '100%', backgroundColor: '#0a0a0a', height: '40%'}}>
          <Image
            source={{uri: thumbnail}}
            resizeMode={'contain'}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      ) : null}
      {/* Header */}
      <PostHeader
        isThumbnail={thumbnail_height}
        onPress={() => navigation.goBack()}
      />
      {/* Title */}
      <Text style={styles.titleText}>{title}</Text>
      {/* Description */}
      <Text style={styles.text2}>{selftext}</Text>
      {/* User */}
      <Text
        style={[
          styles.text2,
          {color: colors.secondary},
        ]}>{`Posted by /n${author}`}</Text>
      {/* Date */}
      <Text style={styles.text2}>
        {' '}
        {`${moment(created).format('MMM, DD, YYYY')}`}
      </Text>
    </ScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleText: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: '700',
    padding: '5%',
  },
  text2: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: '5%',
    paddingBottom: '5%',
  },
});
