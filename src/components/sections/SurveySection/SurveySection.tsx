import styled from 'styled-components'
import ParentInstructions from './ParentInstructions/ParentInstructions'
import React, { useRef } from 'react'
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
import ButtonFillData from '../../ui/ButtonFillData/ButtonFillData'

const CommonBox = styled('div')<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
`

const Form = styled('form')`
  display: flex;
  flex-direction: column;

  @media (${({ theme }) => theme.ui.breakpoints.xs}) {
    gap: 32px;
    margin-bottom: 48px;
  }

  @media (${({ theme }) => theme.ui.breakpoints.m}) {
    gap: 48px;
  }

  @media (${({ theme }) => theme.ui.breakpoints.l}) {
    gap: 64px;
    margin-bottom: 64px;
  }
`

const ChaptersBox = styled('div')`
  display: flex;
  flex-direction: column;

  @media (${({ theme }) => theme.ui.breakpoints.xs}) {
    gap: 64px;
  }

  @media (${({ theme }) => theme.ui.breakpoints.m}) {
    gap: 48px;
  }

  @media (${({ theme }) => theme.ui.breakpoints.l}) {
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

  function handleFillData() {
    fillSurvey(formRef as FormRef)
    dispatch(setAutoDataComplete({ formName: SURVEY_FORM, status: true }))
    nextControlsEl?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <CommonBox id='survey' $isVisible={currentStep === 2}>
      <ButtonFillData handleFill={handleFillData} />

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
