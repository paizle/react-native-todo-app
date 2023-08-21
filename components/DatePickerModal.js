import React from 'react'
import PropTypes from 'prop-types'
import CustomModal from './CustomModal'
import { Calendar } from 'react-native-calendars'
import formatDateForCalendar from '../util/formatDateForCalendar'
import Dayjs from 'dayjs'

export default function DatePickerModal({
  selectedDate,
  setSelectedDate,
  isCalendarVisible,
  setIsCalendarVisible,
}) {
  return (
    <CustomModal
      title="Select a Day"
      transparent={false}
      visible={isCalendarVisible}
      onRequestClose={() => {
        setIsCalendarVisible(false)
      }}
    >
      <Calendar
        onDayPress={(day) => {
          setSelectedDate(Dayjs(day.dateString).toDate())
          setIsCalendarVisible(false)
        }}
        markedDates={{
          [formatDateForCalendar(selectedDate)]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange',
          },
        }}
      />
    </CustomModal>
  )
}

DatePickerModal.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  isCalendarVisible: PropTypes.bool.isRequired,
  setIsCalendarVisible: PropTypes.func.isRequired,
}
