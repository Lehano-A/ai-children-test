import { createSlice } from '@reduxjs/toolkit'

interface NotificationState {
  isOpen: boolean
  message: string
  status: 'success' | 'err'
}

const initialState: NotificationState = {
  isOpen: false,
  message: '',
  status: 'success',
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    openNotification: (state, action) => {
      const { message, status = 'success' } = action.payload

      state.isOpen = true
      state.message = message
      state.status = status
    },

    closeNotification: () => initialState,
  },
})

export const { openNotification, closeNotification } = notificationSlice.actions

export default notificationSlice.reducer
