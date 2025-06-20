import { getRandomNum } from '../../../../utils/getRandomNum'
import type { FormRef } from '../../../../redux/reducers/slices/form/form.types'

export function fillSurvey(surveyFormRef: FormRef, numInput = 0) {
  let skip = 0

  const element = surveyFormRef.current?.elements[numInput]
  if (!element || !(element instanceof HTMLElement)) return

  if (!element) {
    return
  }

  // проверяем, что это элемент INPUT
  if (isHTMLInputElement(element)) {
    const inputElement = element as HTMLInputElement // явно говорим, что это INPUT

    if (inputElement.name === 'childName') {
      inputElement.value = 'Алиса Солнышкова'
    }

    if (inputElement.name === 'childDOB') {
      inputElement.value = '12.01.2005'
    }

    if (inputElement.name === 'parentName') {
      inputElement.value = 'Мария Солнышкова'
    }
    // проверяем, что это элемент FIELDSET
  } else if (isHTMLFieldSetElement(element)) {
    const fieldsetElement = element as HTMLFieldSetElement

    const totalElements = fieldsetElement.elements.length
    const randomId = getRandomNum(totalElements)

    const inputElement = fieldsetElement.elements[randomId] as HTMLInputElement // явно говорим, что это FIELDSET
    inputElement.checked = true

    skip = totalElements
    // проверяем, что это элемент TEXTAREA
  } else if (isHTMLTextAreaElement(element)) {
    const textAreaElement = element as HTMLTextAreaElement // явно говорим, что это TEXTAREA
    textAreaElement.value = 'Какой-то текст'
  }

  fillSurvey(surveyFormRef, numInput + 1 + skip)
}

function isHTMLInputElement(element: HTMLElement) {
  return element.tagName === 'INPUT'
}

function isHTMLFieldSetElement(element: HTMLElement) {
  return element.tagName === 'FIELDSET'
}

function isHTMLTextAreaElement(element: HTMLElement) {
  return element.tagName === 'TEXTAREA'
}
