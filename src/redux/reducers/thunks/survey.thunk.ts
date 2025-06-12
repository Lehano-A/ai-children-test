import type { Dispatch } from '@reduxjs/toolkit'
import { SURVEY_FORM } from '../../../constants'
import { commonSuccessActions } from '../shared/submitHandlers'
import { createComponentThunk } from './shared/createComponentThunk'

export const fetchSurvey = createComponentThunk(
  SURVEY_FORM, // prefix
  // api request (отправляем данные опросника на сервер)
  (data: { task_id: string; survey: { [key: string]: unknown } }) => {
    console.log(data)
    // т.к. к api нет доступа, то стоит заглушка имитации запроса
    return Promise.resolve({ task_id: data.task_id })
  },
  (_, dispatch: Dispatch) => {
    commonSuccessActions(dispatch)
  },
)
