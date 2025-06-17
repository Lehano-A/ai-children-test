import { IMAGE_UPLOAD_FORM } from '../slices/ui/ui.constants'
import { commonSuccessActions } from '../shared/submitHandlers'
import { setTaskId } from '../slices/form.slice'

import { createComponentThunk } from './shared/createComponentThunk'

interface ImageUploadResponse {
  task_id: string
}

export const fetchImageUpload = createComponentThunk(
  IMAGE_UPLOAD_FORM, // prefix
  // api request (отправляет файлы на сервер)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (_formData: FormData) => {
    // т.к. к api нет доступа, то стоит заглушка имитации запроса
    return new Promise<ImageUploadResponse>((resolve) =>
      setTimeout(() => resolve({ task_id: 'pbvg1de-zvd4fk-34r23s-ch37ds' }), 1500),
    )
  },
  (res, dispatch) => {
    commonSuccessActions(dispatch)
    dispatch(setTaskId(res.task_id))
  }, // fulfilled
)
