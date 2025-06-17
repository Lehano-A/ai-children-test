export type Forms = 'imageUploadForm' | 'surveyForm'
export type OtherComponents = 'resultProcessing'

type Loading = Record<Forms, boolean> & Record<OtherComponents, boolean>

type Valid = Record<Forms, boolean>

export interface AutoDataComplete {
  surveyForm: boolean
}

export interface InitialState {
  loading: Loading
  valid: Valid
  autoDataComplete: AutoDataComplete
}
