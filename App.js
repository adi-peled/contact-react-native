import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
//store redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './src/reducers';
import thunk from 'redux-thunk'
import { Provider as PaperProvider } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
//cmps
import Header from './src/cmps/Header'
import Footer from './src/cmps/Footer'
import Main from './src/cmps/Main'
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <PaperProvider  >
        <Provider store={store}>
          <View style={styles.container}>
            <Header />
            <Main />
            <Footer />
          </View>
        </Provider>
      </PaperProvider  >
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />


    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
