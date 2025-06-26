import { createSlice } from '@reduxjs/toolkit'

interface TestState {
  isRunningTest: boolean
  hasMultipleControls: boolean
}

const initialState: TestState = {
  isRunningTest: false,
  hasMultipleControls: false,
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    runningTest: (state) => {
      state.isRunningTest = true
    },

    completeTest: (state) => {
      state.isRunningTest = false
    },

    setHasMultipleControls: (state, action) => {
      const { quantityButtons } = action.payload
      state.hasMultipleControls = quantityButtons > 1
    },
  },
})

export const { runningTest, completeTest, setHasMultipleControls } = testSlice.actions

export default testSlice.reducer
