import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchResultProcessing } from '../thunks/resultProcessing.thunk.'
import { RESULT_PROCESSING } from '../../../constants'

interface ResultProcessingState {
  dataFromApi: { title: string; text: string } | null
}

const initialState: ResultProcessingState = {
  dataFromApi: null,
}

const resultProcessingSlice = createSlice({
  name: RESULT_PROCESSING,
  initialState,
  reducers: {
    saveDataFromApi: (state, action) => {
      state.dataFromApi = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      fetchResultProcessing.fulfilled,
      (state, action: PayloadAction<{ status: string; data: { title: string; text: string } }>) => {
        const { status, data } = action.payload

        if (status === 'done') {
          state.dataFromApi = data
        }
      },
    )
  },
})

export const { saveDataFromApi } = resultProcessingSlice.actions

export default resultProcessingSlice.reducer
