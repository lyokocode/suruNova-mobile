import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <Text className="text-xl text-purple-700">Hello Aelita!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

