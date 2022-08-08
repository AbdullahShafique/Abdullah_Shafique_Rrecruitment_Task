import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import moment from 'moment';
import colors from '../globalStyles/colors';
import PostHeader from '../components/headers/postHeader';
import getCommentsOfThePost from '../apis/getCommentsOfThePost';
import CommentCard from '../components/cards/commentCard';

const Post = ({route, navigation}) => {
  const {postNumber} = route.params;
  // States from redux

  const {Posts} = useSelector(state => state.redditPosts);
  const {
    title,
    thumbnail,
    thumbnail_height,
    selftext,
    author,
    created,
    permalink,
  } = Posts[postNumber].data;
  const [commments, setComments] = useState([]);

  // fetching comments for the post
  useEffect(() => {
    getCommentsOfThePost(permalink).then(data => {
      if (data == false) return;
      setComments(data);
    });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            {/* Top Image */}
            {thumbnail_height ? (
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#0a0a0a',
                  height: Dimensions.get('window').height * 0.3,
                }}>
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
            <Text style={styles.text2}>{selftext.trim()}</Text>
            {/* User */}
            <Text
              style={[
                styles.text2,
                {color: colors.secondary},
              ]}>{`Posted by /n${author}`}</Text>
            {/* Date */}
            <Text style={styles.text2}>
              {`${moment(created).format('MMM, DD, YYYY')}`}
            </Text>
            {/* commments */}
            <Text style={styles.titleText}>{'Comment'}</Text>
            {commments.length == 0 && (
              <Text style={styles.text2}>{'No Comments'}</Text>
            )}
          </>
        )}
        data={commments}
        keyExtractor={index => Math.random()}
        renderItem={({item}) => <CommentCard data={item} />}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tertiary,
  },
  titleText: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: '700',
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
  text2: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
    paddingHorizontal: '5%',
    paddingBottom: '5%',
  },
});
