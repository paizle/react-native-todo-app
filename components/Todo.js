import React, {useState, useRef} from 'react'
import { StyleSheet, Pressable, View, Text, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function Todo() {

  const inputRef = useRef(null)

  const [isChecked, setChecked] = useState(false)

  const [isEditing, setEditing] = useState(false)

  const [text, setText] = useState('a todo')

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
      setChecked(!isChecked)
    }
  }

  return (
    <Pressable
      style={styles.checkboxLabel}
      onPress={() => handleOnPress()}
      onLongPress={() => toggleEditing()}  
    >
        <View style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}>
          {isChecked ? <FontAwesome name="check" /> : ''}
        </View>
        
          <TextInput
            ref={inputRef}
            style={[styles.labelText, styles.inputText, !isEditing && styles.hidden]}
            onChangeText={setText}
            onSubmitEditing={() => setEditing(false)}
            value={text}
            onBlur={() => setEditing(false)}
          />
        
          <Text
            style={[
              styles.labelText,
              isChecked && styles.labelTextChecked,
              isEditing && styles.hidden
            ]}
          >
            {text}
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
  checkboxBase: {
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