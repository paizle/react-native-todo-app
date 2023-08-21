import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import Header from './components/Header'
import CalendarNavigation from './components/CalendarNavigation'
import HelpModal from './components/HelpModal'
import DatePickerModal from './components/DatePickerModal'

import { loadTodos, saveTodos } from './util/storage'
import formatDateForCalendar from './util/formatDateForCalendar'

import Todo from './components/Todo'

function createNewTodo() {
  return {
    date: new Date().toString(),
    done: false,
    text: '',
  }
}

export default function App() {
  const [todos, setTodos] = useState(null)
  const [newTodo, setNewTodo] = useState(createNewTodo())
  const [isHelpVisible, setIsHelpVisible] = useState(false)
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())

  useEffect(() => {
    if (selectedDate) {
      const dateString = formatDateForCalendar(selectedDate)
      loadTodos(dateString).then((loadedTodos) => {
        if (loadedTodos) {
          setTodos(loadedTodos)
        } else {
          setTodos([])
        }
      })
    }
  }, [selectedDate])

  useEffect(() => {
    if (!newTodo) {
      setNewTodo(createNewTodo())
    }
  }, [newTodo])

  const updateNewTodo = (todo) => {
    setNewTodo(null)
    const newTodos = [...todos, todo]
    setTodos(newTodos)
    saveTodos(formatDateForCalendar(selectedDate), newTodos)
  }

  const updateTodo = (index) => (todo) => {
    const todosCopy = [...todos]
    todosCopy[index] = todo
    setTodos(todosCopy)
    saveTodos(formatDateForCalendar(selectedDate), todosCopy)
  }

  const deleteTodo = (index) => () => {
    const todosCopy = [...todos]
    todosCopy.splice(index, 1)
    setTodos(todosCopy)
    saveTodos(formatDateForCalendar(selectedDate), todosCopy)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.appContainer}>
        <Header setIsHelpVisible={setIsHelpVisible} />

        <CalendarNavigation
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setIsCalendarVisible={setIsCalendarVisible}
        />

        <ScrollView style={styles.todoList}>
          {todos?.length ? (
            todos.map((todo, index) => (
              <Todo
                key={todo.date}
                todo={todo}
                updateTodo={updateTodo(index)}
                deleteTodo={deleteTodo(index)}
              />
            ))
          ) : (
            <Text style={styles.heading}>(no todos for this day)</Text>
          )}
        </ScrollView>

        <View>
          {newTodo && <Todo todo={newTodo} updateTodo={updateNewTodo} />}
        </View>

        <DatePickerModal
          isCalendarVisible={isCalendarVisible}
          setIsCalendarVisible={setIsCalendarVisible}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        <HelpModal
          isHelpVisible={isHelpVisible}
          setIsHelpVisible={setIsHelpVisible}
        />

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
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  todoList: {
    flex: 1,
  },
})
