import { NavigationContainer } from '@react-navigation/native';
import Screens from "./Screens.js"
import { SafeAreaView } from 'react-native';
import store from './store';
import { Provider } from 'react-redux'

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
