import type { Forms, OtherComponents } from '../ui/ui.types'

export type StepsName = Forms | OtherComponents

export interface FormState {
  currentNameForm: StepsName
  currentStep: number
  maxReachedStep: number
  totalSteps: number

  uploadedImages: string[]
  taskId: string
}
