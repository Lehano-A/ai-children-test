import { useDispatch } from 'react-redux'
import { validateForm } from '../redux/reducers/actions/validateForm.action'
import type { Forms } from '../redux/reducers/slices/ui/ui.types'
import type { FormRef } from '../redux/reducers/slices/form/form.types'

function useFormValidation(formRef: FormRef, formName: Forms) {
  const dispatch = useDispatch()

  return () => {
    if (formRef.current) {
      dispatch(
        validateForm({
          formName,
          formRef: formRef as FormRef,
        }),
      )
    }
  }
}

export default useFormValidation
