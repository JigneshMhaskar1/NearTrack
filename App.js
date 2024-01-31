import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainStack from './src/navigation/MainStack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store'

const App = () => {
  return (
    <View style={styles.container}>
         <Provider store={store}>
           <MainStack/>
         </Provider>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
