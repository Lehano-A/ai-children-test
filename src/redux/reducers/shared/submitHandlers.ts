import type { AppDispatch } from '../../store'
import { nextStep } from '../slices/form/form.slice'

export const commonSuccessActions = (dispatch: AppDispatch) => {
  dispatch(nextStep())
}
