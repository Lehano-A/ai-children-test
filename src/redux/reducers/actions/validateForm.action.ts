import { setValid } from '../slices/ui/ui.slice'
import type { Forms } from '../slices/ui/ui.types'
import type { FormRef } from '../slices/form/form.types'

interface ValidateForm {
  formName: Forms
  formRef: FormRef
}

export const validateForm = (data: ValidateForm) => {
  const { formName, formRef } = data

  return setValid({ formName, status: formRef.current.checkValidity() })
}
