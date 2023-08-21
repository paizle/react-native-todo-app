import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Dayjs from 'dayjs'

export default function CalendarNavigation({
  selectedDate,
  setSelectedDate,
  setIsCalendarVisible,
}) {
  const handleNextDayPress = () =>
    setSelectedDate((date) => Dayjs(date).add(1, 'day').toDate())

  const handlePreviousDayPress = () =>
    setSelectedDate((date) => Dayjs(date).add(-1, 'day').toDate())

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
        <FontAwesome5 name="calendar-alt" size={18} />
        <Text style={styles.date}>
          {Dayjs(selectedDate).format('MMMM D, YYYY')}
        </Text>
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
  date: {
    fontWeight: '700',
  },
  dayNavigation: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 16,
  },
  calendarButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 4,
  },
})

CalendarNavigation.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  setIsCalendarVisible: PropTypes.func.isRequired,
}
