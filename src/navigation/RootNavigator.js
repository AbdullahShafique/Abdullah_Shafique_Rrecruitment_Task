import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Post from '../screens/post';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false, animation: 'fade'}}>
          {/* Screen 1 */}
          <Stack.Screen name="Home" component={Home} />
          {/* Screen 2 */}
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
