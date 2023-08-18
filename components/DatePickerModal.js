import React from 'react';
import { StyleSheet, View, ScrollView, Text, Modal, Pressable } from 'react-native';
import CustomModal from './CustomModal';
import {Calendar} from 'react-native-calendars';

import formatDateToString from '../util/dateStringFormat';


const DatePickerModal = ({
    selectedDate, 
    setSelectedDate, 
    isCalendarVisible, 
    setIsCalendarVisible, 
    styles}) => {
  return (
    <CustomModal
      title="Select a Day"
      transparent={false}
      visible={isCalendarVisible}
      onRequestClose={() => {
        setIsCalendarVisible(false);
      }}>
      <Calendar
        onDayPress={day => {
          setSelectedDate(new Date(day.dateString))
          setIsCalendarVisible(false)
        }}
        markedDates={{
          [formatDateToString(selectedDate)]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
        }}
      />
    </CustomModal>
  )
}

export default DatePickerModal