import { combineReducers } from '@reduxjs/toolkit'
import testSlice from './slices/test.slice'
import formSlice from './slices/form.slice'
import notificationSlice from './slices/notification.slice'
import uiSlice from './slices/ui.slice'
import resultProcessingSlice from './slices/resultProcessing.slice'

const rootReducer = combineReducers({
  test: testSlice,
  form: formSlice,
  ui: uiSlice,
  notification: notificationSlice,
  resultProcessing: resultProcessingSlice,
})

export default rootReducer
