import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function Todo({ todo, updateTodo, deleteTodo }) {
  const [todoData, setTodoData] = useState({ ...todo })

  const inputRef = useRef(null)

  const [isEditing, setEditing] = useState(false)

  const toggleEditing = () => {
    if (!isEditing) {
      inputRef.current.focus()
    }
    setEditing(!isEditing)
  }

  const handleOnPress = () => {
    if (isEditing) {
      inputRef.current.focus()
    } else {
      setTodoData({ ...todoData, ...{ done: !todoData.done } })
    }
  }

  const handleOnChangeText = (value) => {
    setTodoData({ ...todoData, ...{ text: value } })
  }

  const handleUpdateTodo = () => {
    setEditing(false)
    if (todoData.text) {
      updateTodo(todoData)
    }
  }

  const handleDeletePress = () => {
    Alert.alert('Delete this ToDo', todoData.text, [
      { text: 'OK', onPress: () => deleteTodo() },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={styles.checkboxLabel}
        onPress={() => handleOnPress()}
        onLongPress={() => toggleEditing()}
      >
        <View
          style={[styles.checkbox, todoData.done && styles.checkboxChecked]}
        >
          {todoData.done ? <FontAwesome name="check" color={'white'} /> : ''}
        </View>

        <TextInput
          ref={inputRef}
          style={[
            styles.labelText,
            styles.inputText,
            !isEditing && styles.hidden,
          ]}
          onChangeText={handleOnChangeText}
          onSubmitEditing={handleUpdateTodo}
          value={todoData.text}
          onBlur={() => setEditing(false)}
          placeholder="Enter text..."
        />

        <Text
          style={[
            styles.labelText,
            todoData.done && styles.labelTextChecked,
            isEditing && styles.hidden,
          ]}
        >
          {todoData.text || 'Enter text...'}
        </Text>
      </Pressable>

      {deleteTodo && (
        <FontAwesome
          style={styles.delete}
          name="minus-circle"
          size={24}
          onPress={handleDeletePress}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 4,
    marginBottom: 4,
    paddingTop: 4,
    paddingBottom: 4,
  },
  checkboxLabel: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
  },
  checkboxChecked: {
    backgroundColor: '#84bdc8',
    color: 'white',
  },
  labelText: {
    flex: 1,
    flexGrow: 1,
    fontSize: 24,
    marginLeft: 4,
    marginRight: 4,
  },
  inputText: {
    backgroundColor: '#fffff0',
  },
  labelTextChecked: {
    textDecorationLine: 'line-through',
  },
  delete: {
    padding: 4,
    color: '#ED7B7B',
  },
  hidden: {
    display: 'none',
  },
})

Todo.propTypes = {
  todo: PropTypes.shape({
    date: PropTypes.string,
    done: PropTypes.bool,
    description: PropTypes.string,
  }).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func,
}
