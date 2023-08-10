import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons'; 

import Todo from './components/Todo';

export default function App() {

  const [todos, setTodos] = React.useState([])

  const addTodo = () => {
    setTodos((todos) => [...todos, {}])
  }

  return (
    <SafeAreaProvider>
       <SafeAreaView style={styles.appContainer}>
        <View style={styles.menu}>
          <Text style={styles.heading}>React Native To Do App</Text>
          <FontAwesome5 name="question-circle" size={18} />
        </View>
        <View style={styles.todoList}>
          {todos.map((todo, index) => <Todo key={index} />)}
        </View>
        <Pressable 
          style={styles.actions}
          onPress={() => addTodo()}
        >
          <FontAwesome5 name="plus-circle" size={32} color="white" style={{padding: 12}} />
          <Text style={[styles.heading, {color: 'white'}]}>Add</Text>
        </Pressable>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: '#FEF9B0',
    padding: 8
  },
  menu: {
    flexBasis: 80,
    flexShrink: 0,
    flexGrow: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  todoList: {
    flexGrow: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#64b2e5',
    fontSize: 20,
    borderRadius: 4
  }
});
