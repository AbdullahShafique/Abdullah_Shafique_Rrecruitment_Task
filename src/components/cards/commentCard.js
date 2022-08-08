import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const CommentCard = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.authorText}>{data.author}</Text>
      <Text style={styles.commentText}>{data.text}</Text>
    </View>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    marginBottom: '5%',
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
  authorText: {
    color: colors.secondary,
    fontSize: 14,
    fontWeight: '700',
  },
  commentText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
  },
});
