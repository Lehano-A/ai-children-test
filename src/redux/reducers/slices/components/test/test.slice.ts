import { createSlice } from '@reduxjs/toolkit'
import type { TestState } from './test.types'

const initialState: TestState = {
  isRunningTest: false,
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
  },
})

export const { runningTest, completeTest } = testSlice.actions

export default testSlice.reducer
