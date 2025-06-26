import styled from 'styled-components'
import UploadIcon from '../../../../assets/icons/upload.svg?react'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'
import { saveImage } from '../../../../redux/reducers/slices/form/form.slice'
import { IMAGE_UPLOAD_FORM } from '../../../../redux/reducers/slices/ui/ui.constants'

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

  @media (${({ theme }) => theme.ui.breakpoints.m}) {
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
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.blue['50']};
  border-radius: ${({ theme }) => theme.ui.radius['8']};
  pointer-events: none;

  & svg {
    stroke: ${({ theme }) => theme.palette.default};
  }

  @media (${({ theme }) => theme.ui.breakpoints.xs}) {
    width: 32px;
    height: 32px;

    & svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (${({ theme }) => theme.ui.breakpoints.m}) {
    width: 64px;
    height: 64px;

    & svg {
      width: 36px;
      height: 36px;
    }
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
  width: 100%;
  height: 100%;
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
  const dispatch = useAppDispatch()
  const { uploadedImages } = useAppSelector((state) => state.form)
  const { autoDataComplete } = useAppSelector((state) => state.ui)

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
      <UploadArea>
        <UploadIconBox>
          <UploadIcon />
        </UploadIconBox>

        {uploadedImages[id] && <UploadedImage src={uploadedImages[id]} />}

        <InputUpload
          type='file'
          accept='image/*,.pdf'
          name={`image${id + 1}`}
          onChange={handleFileChange}
          required={autoDataComplete[IMAGE_UPLOAD_FORM] ? false : true}
        />
      </UploadArea>

      <Figcaption>{figcaption}</Figcaption>
    </Figure>
  )
}

export default ImageUploadWithCaption
