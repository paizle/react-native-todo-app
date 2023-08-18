import React from "react"
import { StyleSheet, View, Text, Pressable, Modal} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 

const CustomModal = (props) => {
  return (
    <Modal 
      {...props} 
      animationType="slide"
    >
      <View style={styles.modalHeader}>
        <Text style={styles.heading}>{props.title}</Text>
        <Pressable onPress={() => props.onRequestClose()}>
          <FontAwesome5 name="window-close" size={32} color="black" style={{padding: 12}} />
        </Pressable>
      </View>
      <View style={styles.modalBody}>
        {props.children}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  modalBody: {
    padding: 8
  }
})

export default CustomModal