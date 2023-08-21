import Dayjs from 'dayjs'

const formatDateForCalendar = (date) => Dayjs(date).format('YYYY-MM-DD')

export default formatDateForCalendar
