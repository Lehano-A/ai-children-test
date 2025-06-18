import { setValid } from '../slices/ui/ui.slice'
import type { RefObject } from 'react'
import type { Forms } from '../slices/ui/ui.types'

interface ValidateForm {
  formName: Forms
  formRef: RefObject<HTMLFormElement>
}

export const validateForm = (data: ValidateForm) => {
  const { formName, formRef } = data

  return setValid({ formName, status: formRef.current.checkValidity() })
}
