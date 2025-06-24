import styled from 'styled-components'
import AttentionIcon from '../../../assets/icons/attention.svg?react'
import ImageUploadWithCaption from './ImageUploadWithCaption/ImageUploadWithCaption'
import Button from '../../ui/Button/Button'
import useFormValidation from '../../../hooks/useFormValidation'
import ArrowRightIcon from '../../../assets/icons/arrow-2-right.svg?react'
import { useRef, type FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { createPortal } from 'react-dom'
import { fetchImageUpload } from '../../../redux/reducers/thunks/imageUpload.thunk'
import { IMAGE_UPLOAD_FORM } from '../../../redux/reducers/slices/ui/ui.constants'

import type { FormRef } from '../../../redux/reducers/slices/form/form.types'
import ButtonFillData from '../../ui/ButtonFillData/ButtonFillData'
import { setAutoDataComplete } from '../../../redux/reducers/slices/ui/ui.slice'

import { packFilesInFormData } from './packFilesInFormData'

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
  @media (${({ theme }) => theme.ui.breakpoints.xs}) {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`

const UploadInstructions = styled('div')`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.red['40']};
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.ui.radius['8']};
  gap: 8px;

  & svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
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
  justify-content: center;
  flex-wrap: wrap;

  @media (${({ theme }) => theme.ui.breakpoints.xs}) {
    gap: 16px;
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    gap: 64px;
    margin-bottom: 64px;
  }
`

export const figcaptions = ['Дом, дерево, человек', 'Несуществующее животное', 'Автопортрет']

function ImageUploadSection({ nextControlsEl }: { nextControlsEl: HTMLDivElement | null }) {
  const dispatch = useAppDispatch()

  const formRef = useRef<HTMLFormElement>(null)
  const { currentStep, currentNameForm } = useAppSelector((state) => state.form)
  const { loading, valid } = useAppSelector((state) => state.ui)

  const validate = useFormValidation(formRef as FormRef, IMAGE_UPLOAD_FORM)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = packFilesInFormData({ form })

    dispatch(fetchImageUpload(formData))
  }

  function handleFillData() {
    packFilesInFormData({ form: null, isAutocomplete: true, dispatch })
    dispatch(setAutoDataComplete({ formName: IMAGE_UPLOAD_FORM, status: true }))
  }

  return (
    <div>
      <ButtonFillData handleFill={handleFillData} />

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

        {nextControlsEl &&
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
            nextControlsEl,
          )}
      </Form>
    </div>
  )
}

export default ImageUploadSection
