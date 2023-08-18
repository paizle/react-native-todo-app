import { format } from 'date-fns'

const formatDateToString = (date) => format(date, 'yyyy-MM-dd')

export default formatDateToString