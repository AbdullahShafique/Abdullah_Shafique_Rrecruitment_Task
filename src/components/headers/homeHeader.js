import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>React Native Reddit</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
  },
});
