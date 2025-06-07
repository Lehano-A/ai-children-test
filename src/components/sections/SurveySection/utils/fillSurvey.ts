import type { RefObject } from 'react'
import { getRandomNum } from '../../../../utils/getRandomNum'

export function fillSurvey(surveyFormRef: RefObject<HTMLFormElement>, numInput = 0) {
  let skip = 0

  const element = surveyFormRef.current?.elements[numInput]
  if (!element || !(element instanceof HTMLElement)) return

  if (!element) {
    return
  }

  if (isHTMLInputElement(element)) {
    const inputElement = element as HTMLInputElement

    if (inputElement.name === 'childName') {
      inputElement.value = 'Алиса Солнышкова'
    }

    if (inputElement.name === 'childDOB') {
      inputElement.value = '12.01.2005'
    }

    if (inputElement.name === 'parentName') {
      inputElement.value = 'Мария Солнышкова'
    }
  } else if (isHTMLFieldSetElement(element)) {
    const fieldsetElement = element as HTMLFieldSetElement

    const totalElements = fieldsetElement.elements.length
    const randomId = getRandomNum(totalElements)

    const inputElement = fieldsetElement.elements[randomId] as HTMLInputElement
    inputElement.checked = true

    skip = totalElements
  } else if (isHTMLTextAreaElement(element)) {
    const textAreaElement = element as HTMLTextAreaElement
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
