import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProductScreen } from './screens';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

