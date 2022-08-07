import {StyleSheet, Text, View, Dimensions, Pressable} from 'react-native';
import React from 'react';
import moment from 'moment';
import colors from '../../globalStyles/colors';

const PostCard = ({data, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {/* Title */}
      <Text style={styles.titleText} numberOfLines={2}>
        {data.title}
      </Text>
      {/* Description */}
      <Text style={[styles.text2]} numberOfLines={4}>
        {data.selftext.trim()}
      </Text>
      {/* User */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderColor: 'grey',
          borderTopWidth: 1,
        }}>
        <Text
          style={[styles.text2, {color: colors.secondary}]}
          numberOfLines={1}>
          {`Posted by u/${data.author.trim()}`}
        </Text>
        <Text style={styles.text2}>
          {`${moment(data.created).format('MMM, DD, YYYY')}`}
        </Text>
      </View>
    </Pressable>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height / 4,
    marginTop: '5%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 16,
    padding: '3%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '700',
  },
  text2: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
  },
});
