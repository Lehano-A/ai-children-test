import styled from 'styled-components'
import AttentionIcon from '../../../assets/icons/attention.svg?react'
import ImageUploadWithCaption from '../../ImageUploadWithCaption/ImageUploadWithCaption'

import { useRef, type FormEvent, type RefObject } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch, useAppSelector, type RootState } from '../../../redux/store'
import { createPortal } from 'react-dom'
import ArrowRightIcon from '../../../assets/icons/arrow-2-right.svg?react'

import { fetchImageUpload } from '../../../redux/reducers/thunks/imageUpload.thunk'
import { IMAGE_UPLOAD_FORM } from '../../../constants'
import Button from '../../common/Button/Button'
import useFormValidation from '../../../hooks/useFormValidation'

const Form = styled('form')<{ $isVisible: boolean }>`
  width: 100%;
  display: flex;
  height: min-content;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  position: ${({ $isVisible }) => ($isVisible ? 'static' : 'absolute')};
  top: 0;
  left: 0;
  z-index: ${({ $isVisible }) => ($isVisible ? '0' : '-1')};
`

const Header = styled('header')`
  margin-bottom: 32px;
`

const UploadInstructions = styled('div')`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.red['40']};
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.ui.radius['100']};
  gap: 8px;

  & svg {
    width: 16px;
    height: 16px;
  }
`

const Title = styled('h2')`
  line-height: 1.1;
  margin-bottom: 8px;
`

const Text = styled('p')`
  display: inline-block;
  color: ${({ theme }) => theme.palette.red['110']};
  line-height: 1.4;
`

const GroupImagesBox = styled('div')`
  display: flex;
  gap: 64px;
  flex-wrap: wrap;
  margin-bottom: 64px;
`

export const figcaptions = ['Дом, дерево, человек', 'Несуществующее животное', 'Автопортрет']

function ImageUploadSection({ mainControlsEl }: { mainControlsEl: HTMLDivElement | null }) {
  const dispatch = useAppDispatch()

  const formRef = useRef<HTMLFormElement>(null)
  const { currentStep, currentNameForm } = useSelector((state: RootState) => state.form)
  const { loading, valid } = useAppSelector((state) => state.ui)

  const validate = useFormValidation(formRef as RefObject<HTMLFormElement>, IMAGE_UPLOAD_FORM)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = packFilesInFormData(form)

    dispatch(fetchImageUpload(formData))
  }

  return (
    <Form
      $isVisible={currentStep === 1}
      ref={formRef}
      onSubmit={handleSubmit}
      id={IMAGE_UPLOAD_FORM}
      onInput={validate}
    >
      <Header>
        <Title>Загрузите фотографии рисунков</Title>

        <UploadInstructions>
          <AttentionIcon />
          <Text>Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб</Text>
        </UploadInstructions>
      </Header>

      <GroupImagesBox>
        {figcaptions.map((text, id) => (
          <ImageUploadWithCaption key={text + id} id={id} figcaption={text} />
        ))}
      </GroupImagesBox>

      {mainControlsEl &&
        currentNameForm === IMAGE_UPLOAD_FORM &&
        createPortal(
          <Button
            isLoading={loading[IMAGE_UPLOAD_FORM]}
            isDisabled={!valid[IMAGE_UPLOAD_FORM] || loading[IMAGE_UPLOAD_FORM]}
            buttonName='Далее'
            icon={<ArrowRightIcon />}
            type='submit'
            formName={IMAGE_UPLOAD_FORM}
          />,
          mainControlsEl,
        )}
    </Form>
  )
}

function packFilesInFormData(form: HTMLFormElement) {
  const formData = new FormData()
  const image1 = (form.elements.namedItem('image1') as HTMLInputElement)?.files?.[0]
  const image2 = (form.elements.namedItem('image2') as HTMLInputElement)?.files?.[0]
  const image3 = (form.elements.namedItem('image3') as HTMLInputElement)?.files?.[0]

  if (image1) formData.append('files', image1)
  if (image2) formData.append('files', image2)
  if (image3) formData.append('files', image3)

  return formData
}

export default ImageUploadSection
