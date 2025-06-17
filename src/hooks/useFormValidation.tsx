import { type RefObject } from 'react'
import { useDispatch } from 'react-redux'
import { validateForm } from '../redux/reducers/actions/validateForm.action'
import type { Forms } from '../redux/reducers/slices/ui/ui.slice'

function useFormValidation(formRef: RefObject<HTMLFormElement>, formName: Forms) {
  const dispatch = useDispatch()

  return () => {
    if (formRef.current) {
      dispatch(
        validateForm({
          formName,
          formRef: formRef as RefObject<HTMLFormElement>,
        }),
      )
    }
  }
}

export default useFormValidation
