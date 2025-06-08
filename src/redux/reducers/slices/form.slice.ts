import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type OtherComponents, type Forms } from './ui.slice'
import { IMAGE_UPLOAD_FORM, RESULT_PROCESSING, SURVEY_FORM } from '../../../constants'

type StepsName = Forms | OtherComponents

interface FormState {
  currentNameForm: StepsName
  currentStep: number
  maxReachedStep: number
  totalSteps: number

  uploadedImages: string[]
  taskId: string
}

export const sequenceComponents: { [key: number]: Forms | OtherComponents } = {
  1: IMAGE_UPLOAD_FORM,
  2: SURVEY_FORM,
  3: RESULT_PROCESSING,
}

const initialState: FormState = {
  currentNameForm: IMAGE_UPLOAD_FORM,
  currentStep: 1,
  maxReachedStep: 1,
  totalSteps: 3,

  uploadedImages: [],
  taskId: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCurrentComponentName(state, action) {
      state.currentNameForm = action.payload
    },

    nextStep(state) {
      if (state.currentStep < state.totalSteps) {
        state.currentStep += 1
        state.maxReachedStep = Math.max(state.maxReachedStep, state.currentStep)
        state.currentNameForm = sequenceComponents[state.currentStep]
      }
    },

    prevStep(state) {
      if (state.currentStep > 1) {
        state.currentStep -= 1

        state.currentNameForm = sequenceComponents[state.currentStep]
      }
    },

    saveImage(state, action: PayloadAction<{ image: string; id: number }>) {
      const { image, id } = action.payload
      state.uploadedImages[id] = image
    },

    setTaskId(state, action: PayloadAction<string>) {
      state.taskId = action.payload
    },
  },
})

export const { nextStep, prevStep, saveImage, setTaskId, setCurrentComponentName } =
  formSlice.actions

export default formSlice.reducer
