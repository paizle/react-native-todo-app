import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Todo from './components/Todo';

export default function App() {
  return (
    <SafeAreaProvider>
       <SafeAreaView style={styles.appContainer}>
        <View>
          <Text style={{ fontSize: 24 }}>React Native To Do App</Text>
          <Todo />
          <Todo />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#FEF9B0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
