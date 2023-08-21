import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Pressable, Modal } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function CustomModal(props) {
  const { title, onRequestClose, children } = props
  return (
    <Modal {...props} animationType="slide">
      <View style={styles.modal}>
        <View style={styles.modalHeader}>
          <Text style={styles.heading}>{title}</Text>
          <Pressable onPress={() => onRequestClose()}>
            <FontAwesome5
              name="window-close"
              size={32}
              color="black"
              style={{ padding: 12 }}
            />
          </Pressable>
        </View>
        <View style={styles.modalBody}>{children}</View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
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
    padding: 8,
  },
})

CustomModal.propTypes = {
  title: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
