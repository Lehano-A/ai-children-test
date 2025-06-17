import styled from 'styled-components'

import ParentInstructions from '../../Instructions/ParentInstructions'
import React, { useRef, type RefObject } from 'react'
import { fillSurvey } from './utils/fillSurvey'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { setAutoDataComplete } from '../../../redux/reducers/slices/ui/ui.slice'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import EmotionalSphere from './Chapters/EmotionalSphere'
import SocialInteraction from './Chapters/SocialInteraction'
import SelfRegulation from './Chapters/SelfRegulation'
import SelfConfidence from './Chapters/SelfConfidence'
import IntroInfo from './Chapters/IntroInfo'
import CommonQuestions from './Chapters/CommonQuestions'
import { fetchSurvey } from '../../../redux/reducers/thunks/survey.thunk'
import { createPortal } from 'react-dom'
import ForwardRightIcon from '../../../assets/icons/forward-right.svg?react'

import { SURVEY_FORM } from '../../../redux/reducers/slices/ui/ui.constants'
import Button from '../../common/Button/Button'
import useFormValidation from '../../../hooks/useFormValidation'

const CommonBox = styled('div')<{ $currentStep: number }>`
  position: ${({ $currentStep }) => ($currentStep === 2 ? 'static' : 'absolute')};
  visibility: ${({ $currentStep }) => ($currentStep === 2 ? 'visible' : 'hidden')};
  z-index: ${({ $currentStep }) => ($currentStep === 2 ? 0 : -1)};
`

const Form = styled('form')`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 64px;
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

const SurveySection = React.memo(function SurveySection({
  mainControlsEl,
}: {
  mainControlsEl: HTMLDivElement | null
}) {
  const dispatch = useAppDispatch()
  const formRef = useRef<HTMLFormElement>(null)

  const { currentStep, currentNameForm, taskId } = useAppSelector((state) => state.form)
  const { loading, valid } = useAppSelector((state) => state.ui)

  const validate = useFormValidation(formRef as RefObject<HTMLFormElement>, SURVEY_FORM)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    console.log(data)

    dispatch(fetchSurvey({ task_id: taskId, survey: data }))
  }
  return (
    <CommonBox $currentStep={currentStep}>
      <ButtonFillData
        onClick={() => {
          fillSurvey(formRef as React.RefObject<HTMLFormElement>)
          dispatch(setAutoDataComplete({ formName: SURVEY_FORM, status: true }))
        }}
      >
        <AutoAwesomeIcon />
      </ButtonFillData>

      <Form ref={formRef} id={SURVEY_FORM} onSubmit={handleSubmit} onInput={validate}>
        <IntroInfo />
        <ParentInstructions />
        <EmotionalSphere />
        <SocialInteraction />

        <SelfRegulation />

        <SelfConfidence />

        <CommonQuestions />

        {mainControlsEl &&
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
            mainControlsEl,
          )}
      </Form>
    </CommonBox>
  )
})

export default SurveySection
