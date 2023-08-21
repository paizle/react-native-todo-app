import Storage from 'react-native-storage'
import AsyncStorage from '@react-native-async-storage/async-storage'

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
})

const loadTodos = (dateString) => {
  const todosPromise = storage
    .load({
      key: dateString,
      autoSync: true,
      syncInBackground: true,
    })
    .then((data) => data)
    .catch((err) => {
      switch (err.name) {
        case 'NotFoundError':
          // ignore error
          break
        default:
          console.warn(err.message)
      }
      return null
    })
  return todosPromise
}

const saveTodos = (dateString, savingTodos) => {
  storage.save({
    key: dateString,
    data: savingTodos,
    expires: null,
  })
}

export { loadTodos, saveTodos }
