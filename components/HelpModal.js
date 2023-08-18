import React from "react"
import { StyleSheet, View, ScrollView, Text, Modal, Pressable } from 'react-native';
import CustomModal from './CustomModal';

const HelpModal = ({isHelpVisible, setIsHelpVisible, styles}) => {
  return (
    <CustomModal
      title="Help"
      visible={isHelpVisible}
      onRequestClose={() => {
        setIsHelpVisible(false)
      }}
      >
        <View onPress={() => setIsHelpVisible(false)}>
          <Text style={styles.heading}>Welcome to the React Native To Do app</Text>
          <Text style={styles.heading}>To edit the text of a todo, long press on it.</Text>
          <Text style={styles.heading}>To mark a To Do as done, tap on it.</Text>
        </View>
    </CustomModal>
  )
}

export default HelpModal