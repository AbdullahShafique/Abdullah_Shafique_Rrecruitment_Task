import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';

const PostHeader = ({onPress, isThumbnail}) => {
  return (
    <View
      style={[
        styles.container,
        {position: isThumbnail ? 'absolute' : 'relative'},
      ]}>
      <Pressable
        style={{justifyContent: 'center', marginLeft: '5%'}}
        onPress={onPress}>
        <Image
          source={require('../../assets/icons/back_arrow.png')}
          resizeMode={'contain'}
          style={[
            styles.backButton,
            {tintColor: isThumbnail ? 'white' : 'black'},
          ]}
        />
      </Pressable>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    height: '5%',
    width: '100%',
    justifyContent: 'center',
    top: 10,
  },
  backButton: {width: '5%', height: 50},
});
