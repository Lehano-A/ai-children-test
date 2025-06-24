import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchResultProcessing } from '../../thunks/resultProcessing.thunk.'
import { IMAGE_UPLOAD_FORM, RESULT_PROCESSING, SURVEY_FORM } from './ui.constants'
import type { AutoDataComplete, Forms, InitialState, OtherComponents } from './ui.types'

export const namesForms: {
  [key: number]: Forms
} = {
  1: IMAGE_UPLOAD_FORM,
  2: SURVEY_FORM,
}

const initialState: InitialState = {
  loading: {
    imageUploadForm: false,
    surveyForm: false,
    resultProcessing: false,
  },

  autoDataComplete: {
    imageUploadForm: false,
    surveyForm: false,
  },

  valid: {
    imageUploadForm: false,
    surveyForm: false,
  },
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (
      state,
      action: PayloadAction<{ componentName: Forms | OtherComponents; status: boolean }>,
    ) => {
      const { componentName, status } = action.payload
      state.loading[componentName] = status
    },

    setValid: (state, action: PayloadAction<{ formName: Forms; status: boolean }>) => {
      const { formName, status } = action.payload
      state.valid[formName] = status
    },

    setAutoDataComplete: (
      state,
      action: PayloadAction<{ formName: keyof AutoDataComplete; status: boolean }>,
    ) => {
      const { formName, status } = action.payload
      state.autoDataComplete[formName] = status
      state.valid[formName] = status
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchResultProcessing.fulfilled, (state, action) => {
      const { status } = action.payload

      if (status === 'done') {
        state.loading[RESULT_PROCESSING] = false
      }
    })

    builder.addCase(fetchResultProcessing.rejected, (state) => {
      state.loading[RESULT_PROCESSING] = false
    })
  },
})

export const { setLoading, setValid, setAutoDataComplete } = uiSlice.actions

export default uiSlice.reducer
