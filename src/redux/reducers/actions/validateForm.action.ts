import { setValid, type Forms } from '../slices/ui.slice'
import type { RefObject } from 'react'

interface ValidateForm {
  formName: Forms
  formRef: RefObject<HTMLFormElement>
}

export const validateForm = (data: ValidateForm) => {
  const { formName, formRef } = data

  return setValid({ formName, status: formRef.current.checkValidity() })
}
