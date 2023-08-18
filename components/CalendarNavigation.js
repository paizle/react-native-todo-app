import React from "react";
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { format, addDays } from 'date-fns'

const CalendarNavigation = ({selectedDate, setSelectedDate, setIsCalendarVisible}) => {
  
  const handleNextDayPress = () => setSelectedDate(date => addDays(date, 1))
  
  const handlePreviousDayPress = () => setSelectedDate(date => addDays(date, -1))
  
  return (
    <View style={styles.dayNavigation}>
      <FontAwesome5
        name="arrow-alt-circle-left"
        size={32}
        onPress={handlePreviousDayPress} 
      />
      <Pressable 
        style={styles.calendarButton}
        onPress={() => setIsCalendarVisible(true)} 
      >
        <FontAwesome5
          name="calendar-alt"
          size={18}
        />
        <Text>{format(selectedDate, 'do LLLL, y - p')}</Text>
      </Pressable>
      <FontAwesome5
        name="arrow-alt-circle-right"
        size={32}
        onPress={handleNextDayPress} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  dayNavigation: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    flexDirection: 'row',
    marginTop: 16
  },
  calendarButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  }
})

export default CalendarNavigation