import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Pressable, View, Text, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function Todo(props) {

  const [todo, setTodo] = useState({...props.todo})

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
      setTodo({...todo, ...{done: !todo.done}})
    }
  }

  const handleOnChangeText = (value) => {
    setTodo({...todo, ...{text: value}})
  }

  const updateTodo = () => {
    setEditing(false)
    if (todo.text) {
      props.updateTodo(todo)
    }
  }

  return (
    <Pressable
      style={styles.checkboxLabel}
      onPress={() => handleOnPress()}
      onLongPress={() => toggleEditing()}  
    >
      <View style={[styles.checkbox, todo.done && styles.checkboxChecked]}>
        {todo.done ? <FontAwesome name="check" /> : ''}
      </View>
      
      <TextInput
        ref={inputRef}
        style={[styles.labelText, styles.inputText, !isEditing && styles.hidden]}
        onChangeText={handleOnChangeText}
        onSubmitEditing={() => updateTodo()}
        value={todo.text}
        onBlur={() => setEditing(false)}
        placeholder="Enter text..."
      />
    
      <Text
        style={[
          styles.labelText,
          todo.done && styles.labelTextChecked,
          isEditing && styles.hidden
        ]}
      >
        {todo.text || 'Enter text...'}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  checkboxLabel: {
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    marginTop: 4,
    marginBottom: 4
  },
  checkbox: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: '#00FFFF',
  },
  labelText: {
    fontSize: 24,
    flexGrow: 1,
  },
  inputText: {
    backgroundColor: '#fffff0',
  },
  labelTextChecked: {
    textDecorationLine: 'line-through'
  },
  hidden: {
    display: 'none'
  }
});

Todo.propTypes = {
  todo: PropTypes.shape({
    date: PropTypes.string,
    done: PropTypes.bool,
    description: PropTypes.string
  }),
  setTodo: PropTypes.func
}