import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Animated,
  Platform,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux';
import vh from './src/utils/units/vh';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './src/navigation';

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();

  }
  render() {
    return (
      // <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="light-content"
          />

          <View style={styles.container}>
            <Navigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? 5 * vh : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default App;
