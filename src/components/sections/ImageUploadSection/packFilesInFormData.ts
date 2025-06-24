import type { Dispatch } from '@reduxjs/toolkit'
import { saveImage } from '../../../redux/reducers/slices/form/form.slice'
import ImageMemeFirst from '/1.jpg?url'
import ImageMemeSecond from '/2.jpg?url'
import ImageMemeThird from '/3.jpg?url'

interface PackFilesInFormData {
  form: HTMLFormElement | null
  isAutocomplete?: boolean
  dispatch?: Dispatch | null
}

// упаковать файлы в FormData
export async function packFilesInFormData({
  form,
  isAutocomplete = false,
  dispatch = null,
}: PackFilesInFormData) {
  const formData = new FormData()
  const images: (File | string)[] = []

  // если автозаполняем инпуты
  if (isAutocomplete) {
    const imageUrls = [ImageMemeFirst, ImageMemeSecond, ImageMemeThird]

    const files = await createFileObjects(imageUrls)
    images.push(...files)

    if (dispatch) {
      // для Redux преобразуем File в base64
      for (let i = 0; i < files.length; i++) {
        convertFileToBase64(files, i, dispatch)
      }
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

// загружаем изображения как Blob и создаем File объекты
async function createFileObjects(imageUrls: string[]) {
  return await Promise.all(
    imageUrls.map(async (url, index) => {
      const response = await fetch(url)
      const blob = await response.blob()
      return new File([blob], `${index + 1}.jpg`, { type: blob.type })
    }),
  )
}

// преобразовать File в base64 для сохранения корректного формата в redux
function convertFileToBase64(files: File[], i: number, dispatch: Dispatch) {
  const file = files[i]
  const reader = new FileReader()

  reader.onloadend = () => {
    dispatch(
      saveImage({
        id: i,
        image: reader.result as string, // base64 строка
      }),
    )
  }

  reader.readAsDataURL(file)
}
