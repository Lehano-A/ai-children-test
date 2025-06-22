import styled from 'styled-components'
import UploadIcon from '../../../../assets/icons/upload.svg?react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveImage } from '../../../../redux/reducers/slices/form/form.slice'
import type { RootState } from '../../../../redux/store'

const Figure = styled('figure')`
  display: flex;
  flex-direction: column;
`

const UploadArea = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.surface3};
  border-radius: ${({ theme }) => theme.ui.radius['8']};

  @media (${({ theme }) => theme.ui.breakpoints.xs}) {
    width: 264px;
    height: 64px;
  }

  @media (min-width: 768px) {
    width: 216px;
    height: 161px;
  }
`

const UploadIconBox = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.blue['50']};
  border-radius: ${({ theme }) => theme.ui.radius['8']};

  @media (${({ theme }) => theme.ui.breakpoints.xs}) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: 768px) {
    width: 64px;
    height: 64px;
  }

  & svg {
    width: 100%;
    height: 100%;
    stroke: ${({ theme }) => theme.palette.default};
  }
`

const Figcaption = styled('figcaption')`
  height: 30px;
  background-color: ${({ theme }) => theme.palette.surface1};
  display: flex;
  justify-content: center;
  align-items: end;
  flex-shrink: 0;
`
const InputUpload = styled('input')`
  position: absolute;
  top: 0;
  cursor: pointer;
  width: 1px;
  height: 1px;
  opacity: 0;
`

const UploadedImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.ui.radius['8']};
`

interface ImageUploadWithCaptionProps {
  figcaption: string
  id: number
}

function ImageUploadWithCaption({ figcaption, id }: ImageUploadWithCaptionProps) {
  const dispatch = useDispatch()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const { uploadedImages } = useSelector((state: RootState) => state.form)

  function handleClick() {
    fileInputRef.current?.click()
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]

    // если выбрали файл
    if (file) {
      // создаём временный URL для изображения
      const reader = new FileReader()
      reader.onloadend = () => {
        dispatch(saveImage({ id, image: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Figure>
      <UploadArea onClick={handleClick}>
        <UploadIconBox>
          <UploadIcon />
        </UploadIconBox>

        {uploadedImages[id] && <UploadedImage src={uploadedImages[id]} />}

        <InputUpload
          type='file'
          accept='image/*,.pdf'
          ref={fileInputRef}
          onChange={handleFileChange}
          name={`image${id + 1}`}
          required
        />
      </UploadArea>

      <Figcaption>{figcaption}</Figcaption>
    </Figure>
  )
}

export default ImageUploadWithCaption
