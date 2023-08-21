import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import CustomModal from './CustomModal'

export default function HelpModal({ isHelpVisible, setIsHelpVisible }) {
  return (
    <CustomModal
      title="Help"
      visible={isHelpVisible}
      onRequestClose={() => {
        setIsHelpVisible(false)
      }}
    >
      <View onPress={() => setIsHelpVisible(false)}>
        <Text style={styles.heading}>
          Welcome to the React Native To Do app
        </Text>
        <Text style={styles.text}>
          To edit the text of a todo, long press on it.
        </Text>
        <Text style={styles.text}>To mark a To Do as done, tap on it.</Text>
        <Text style={styles.text}>
          To create a new ToDo, start editing the ToDo at the bottom of the
          screen.
        </Text>
        <Text style={styles.text}>
          To delete a ToDo, tap the delete button to the right of the ToDo.
        </Text>
        <Text style={styles.text}>
          To select a day to view or create ToDos for a specific day, click the
          calendar icon and choose a day from the calendar. Alternatively tap
          the left or right buttons to the side of the calendar icon to step
          backwards or forward one day.
        </Text>
      </View>
    </CustomModal>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    fontSize: 18,
    marginTop: 4,
    marginBottom: 4,
  },
})

HelpModal.propTypes = {
  isHelpVisible: PropTypes.bool.isRequired,
  setIsHelpVisible: PropTypes.func.isRequired,
}
