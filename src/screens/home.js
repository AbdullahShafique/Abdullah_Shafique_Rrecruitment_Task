import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import getPostsFromReddit from '../apis/getPostsFromReddit';
import {postsReducer} from '../redux/features/postsSlice';
import HomeHeader from '../components/headers/homeHeader';
import PostCard from '../components/cards/postCard';

const Home = ({navigation}) => {
  const {Posts, After} = useSelector(state => state.redditPosts); // All posts data is maintained in redux Posts State   // After is used as the anchor point to get the next slice of data
  const [ScrollCount, setScrollCount] = useState(0); // ScrollCount keeps a track of number to times user have scroll to the end. Fetching 10 next posts each time value changes
  const postsDispatcher = useDispatch(); //Redux Dispatcher to mutate the posts State

  useEffect(() => {
    getPostsFromReddit(After).then(data => {
      if (data === false) {
        Alert.alert('Something Went Wrong!', 'Please reload the app');
        return;
      }
      postsDispatcher(postsReducer({Posts: data.postData, After: data.after}));
    });
  }, [ScrollCount]);
  return (
    <View style={styles.container}>
      {/* Header */}
      <HomeHeader />
      {/* Posts List from r/reactnative/ subreddit Hot section */}
      <FlatList
        data={Posts}
        keyExtractor={(item, index) => item.data.id + index}
        renderItem={({item, index}) => (
          <PostCard
            data={item.data}
            onPress={() => navigation.navigate('Post', {postNumber: index})}
          />
        )}
        onEndReached={() => setScrollCount(prev => prev + 1)}
        ListFooterComponent={() => (
          <View style={{marginVertical: '5%'}}>
            <ActivityIndicator color={'00a6ff'} size={'small'} />
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
