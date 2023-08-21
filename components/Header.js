import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function Header({ setIsHelpVisible }) {
  return (
    <View style={styles.menu}>
      <Text style={styles.heading}>React Native To Do App</Text>
      <FontAwesome5
        name="question-circle"
        size={32}
        onPress={() => setIsHelpVisible(true)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
})

Header.propTypes = {
  setIsHelpVisible: PropTypes.bool.isRequired,
}
