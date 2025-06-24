import type { Dispatch } from '@reduxjs/toolkit'
import { saveImage } from '../../../redux/reducers/slices/form/form.slice'
import ImageMemeFirst from '../../../../public/1.jpg'
import ImageMemeSecond from '../../../../public/2.jpg'
import ImageMemeThird from '../../../../public/3.jpg'

interface PackFilesInFormData {
  form: HTMLFormElement | null
  isAutocomplete?: boolean
  dispatch?: Dispatch | null
}

export function packFilesInFormData({
  form,
  isAutocomplete = false,
  dispatch = null,
}: PackFilesInFormData) {
  const formData = new FormData()
  const images: (File | string)[] = []

  // если автозаполняем инпуты
  if (isAutocomplete) {
    images.push(ImageMemeFirst, ImageMemeSecond, ImageMemeThird)

    if (dispatch) {
      dispatch(saveImage({ id: 0, image: ImageMemeFirst }))
      dispatch(saveImage({ id: 1, image: ImageMemeSecond }))
      dispatch(saveImage({ id: 2, image: ImageMemeThird }))
    }
  } else if (form) {
    // проходимся по инпутам
    for (let i = 1; i <= 3; i++) {
      const file = (form.elements.namedItem(`image${i}`) as HTMLInputElement)?.files?.[0]
      if (file) images.push(file)
    }
  }

  images.forEach((image) => formData.append('files', image))

  return formData
}
