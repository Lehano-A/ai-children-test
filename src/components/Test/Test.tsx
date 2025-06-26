import { useEffect, useRef, useState } from 'react'
import StepProgress from '../ui/StepProgress/StepProgress'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import ImageUploadSection, { figcaptions } from '../sections/ImageUploadSection/ImageUploadSection'
import styled, { css } from 'styled-components'
import ButtonPrev from '../ui/ButtonPrev/ButtonPrev'
import SurveySection from '../sections/SurveySection/SurveySection'
import ResultSection from '../sections/ResultSection/ResultSection'
import { setHasMultipleControls } from '../../redux/reducers/slices/components/test/test.slice'

const CommonBox = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const TestBox = styled('div')`
  position: relative;
  width: 100%;
  border-radius: ${({ theme }) => theme.ui.radius['20']};
  padding: 0 64px 32px;

  @media (${({ theme }) => theme.ui.breakpoints.xs}) {
    padding: 0 16px;
  }

  @media (${({ theme }) => theme.ui.breakpoints.m}) {
    padding: 0 24px;
  }

  @media (${({ theme }) => theme.ui.breakpoints.l}) {
    padding: 0 64px;
  }
`

const Wrapper = styled('div')`
  @media (${({ theme }) => theme.ui.breakpoints.xs}) {
    padding: 24px 0 16px;
  }

  @media (${({ theme }) => theme.ui.breakpoints.m}) {
    padding: 32px 0 24px;
  }

  @media (${({ theme }) => theme.ui.breakpoints.l}) {
    &:has(:not(#testResult)) {
      padding: 48px 0 32px;
    }

    &:has(#testResult) {
      padding: 64px 0 32px;
    }
  }
`

const StepsControlsBox = styled('div')<{ $hasMultipleControls: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  min-height: 40px;
  gap: 24px;

  @media (${({ theme }) => theme.ui.breakpoints.xs}) {
    ${({ $hasMultipleControls }) =>
      $hasMultipleControls &&
      css`
        flex-direction: column-reverse;
        align-items: start;
      `} {
    }
  }

  @media (${({ theme }) => theme.ui.breakpoints.m}) {
    ${({ $hasMultipleControls }) =>
      $hasMultipleControls &&
      css`
        flex-direction: row;
        align-items: end;
      `}
  }
`

const Step = styled('span')`
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.muted};
  font-size: 1.4rem;
  line-height: 1.25;
  font-weight: 500;
`

const ControlsBox = styled('div')<{ $hasMultipleControls: boolean }>`
  display: flex;
  gap: 8px;

  @media (${({ theme }) => theme.ui.breakpoints.xs}) {
    ${({ $hasMultipleControls }) =>
      $hasMultipleControls &&
      css`
        flex-direction: column;
        width: 100%;
      `}
  }

  @media (${({ theme }) => theme.ui.breakpoints.m}) {
    ${({ $hasMultipleControls }) =>
      $hasMultipleControls &&
      css`
        flex-direction: row-reverse;
      `}

    ${({ $hasMultipleControls }) =>
      $hasMultipleControls &&
      css`
        & button {
          width: 100%;
        }
      `}
  }

  @media (${({ theme }) => theme.ui.breakpoints.l}) {
    ${({ $hasMultipleControls }) =>
      $hasMultipleControls &&
      css`
        width: auto;
      `}
  }
`

function Test() {
  const dispatch = useAppDispatch()

  const { hasMultipleControls } = useAppSelector((state) => state.test)
  const { currentStep, totalSteps, maxReachedStep } = useAppSelector((state) => state.form)

  const nextControlsRef = useRef<HTMLDivElement>(null)
  const [nextControlsEl, setNextControlsEl] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (nextControlsRef.current) {
      setNextControlsEl(nextControlsRef.current)
    }
  }, [])

  useEffect(() => {
    if (nextControlsRef.current) {
      const quantityButtons = nextControlsRef.current.children.length
      dispatch(setHasMultipleControls(quantityButtons))
    }
  }, [currentStep])

  return (
    <CommonBox>
      <StepProgress totalParts={figcaptions.length} step={currentStep} />
      <TestBox>
        <Wrapper>
          {currentStep >= 1 && currentStep < 3 && (
            <ImageUploadSection nextControlsEl={nextControlsEl} />
          )}

          {((currentStep >= 2 && currentStep < 3) || maxReachedStep === 2) && (
            <SurveySection nextControlsEl={nextControlsEl} />
          )}

          {currentStep === 3 && <ResultSection nextControlsEl={nextControlsEl} />}

          <StepsControlsBox $hasMultipleControls={hasMultipleControls}>
            <Step>
              Шаг {currentStep}/{totalSteps}
            </Step>

            <ControlsBox
              id='controlsBox'
              ref={nextControlsRef}
              $hasMultipleControls={hasMultipleControls}
            >
              {currentStep === 2 && <ButtonPrev />}
            </ControlsBox>
          </StepsControlsBox>
        </Wrapper>
      </TestBox>
    </CommonBox>
  )
}

export default Test
