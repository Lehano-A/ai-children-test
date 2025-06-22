import styled from 'styled-components'
import ParentInstructions from './ParentInstructions/ParentInstructions'
import React, { useRef } from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import EmotionalSphere from './Chapters/EmotionalSphere'
import SocialInteraction from './Chapters/SocialInteraction'
import SelfRegulation from './Chapters/SelfRegulation'
import SelfConfidence from './Chapters/SelfConfidence'
import IntroInfo from './Chapters/IntroInfo'
import CommonQuestions from './Chapters/CommonQuestions'
import ForwardRightIcon from '../../../assets/icons/forward-right.svg?react'
import Button from '../../ui/Button/Button'
import useFormValidation from '../../../hooks/useFormValidation'
import { fillSurvey } from './utils/fillSurvey'
import { setAutoDataComplete } from '../../../redux/reducers/slices/ui/ui.slice'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { fetchSurvey } from '../../../redux/reducers/thunks/survey.thunk'
import { createPortal } from 'react-dom'
import { SURVEY_FORM } from '../../../redux/reducers/slices/ui/ui.constants'
import type { FormRef } from '../../../redux/reducers/slices/form/form.types'

const CommonBox = styled('div')<{ $currentStep: number }>`
  position: ${({ $currentStep }) => ($currentStep === 2 ? 'static' : 'absolute')};
  visibility: ${({ $currentStep }) => ($currentStep === 2 ? 'visible' : 'hidden')};
  z-index: ${({ $currentStep }) => ($currentStep === 2 ? 0 : -1)};
`

const Form = styled('form')`
  display: flex;
  flex-direction: column;

  @media (min-width: 296px) {
    gap: 32px;
    margin-bottom: 48px;
  }

  @media (min-width: 600px) {
    gap: 48px;
  }

  @media (min-width: 904px) {
    gap: 64px;
    margin-bottom: 64px;
  }
`

const ButtonFillData = styled('button')`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.palette.blue['100']};
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue['110']};
  }

  & svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.palette.surface1};
  }
`

const ChaptersBox = styled('div')`
  display: flex;
  flex-direction: column;

  @media (min-width: 296px) {
    gap: 64px;
  }

  @media (min-width: 600px) {
    gap: 48px;
  }

  @media (min-width: 904px) {
    gap: 64px;
  }
`

const SurveySection = React.memo(function SurveySection({
  nextControlsEl,
}: {
  nextControlsEl: HTMLDivElement | null
}) {
  const dispatch = useAppDispatch()
  const formRef = useRef<HTMLFormElement>(null)

  const { loading, valid } = useAppSelector((state) => state.ui)
  const { currentStep, currentNameForm, taskId } = useAppSelector((state) => state.form)

  const validate = useFormValidation(formRef as FormRef, SURVEY_FORM)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))

    dispatch(fetchSurvey({ task_id: taskId, survey: data }))
  }
  return (
    <CommonBox $currentStep={currentStep}>
      <ButtonFillData
        onClick={() => {
          fillSurvey(formRef as FormRef)
          dispatch(setAutoDataComplete({ formName: SURVEY_FORM, status: true }))
        }}
      >
        <AutoAwesomeIcon />
      </ButtonFillData>

      <Form ref={formRef} id={SURVEY_FORM} onSubmit={handleSubmit} onInput={validate}>
        <IntroInfo />
        <ParentInstructions />

        <ChaptersBox>
          <EmotionalSphere />
          <SocialInteraction />

          <SelfRegulation />

          <SelfConfidence />

          <CommonQuestions />
        </ChaptersBox>

        {nextControlsEl &&
          currentNameForm === SURVEY_FORM &&
          createPortal(
            <Button
              isLoading={loading[SURVEY_FORM]}
              isDisabled={!valid[SURVEY_FORM] || loading[SURVEY_FORM]}
              buttonName='Узнать результаты'
              icon={<ForwardRightIcon />}
              type='submit'
              formName={SURVEY_FORM}
            />,
            nextControlsEl,
          )}
      </Form>
    </CommonBox>
  )
})

export default SurveySection
