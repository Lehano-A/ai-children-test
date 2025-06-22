import { useEffect, useRef, useState } from 'react'
import StepProgress from '../ui/StepProgress/StepProgress'
import { useAppSelector } from '../../redux/store'
import ImageUploadSection, { figcaptions } from '../sections/ImageUploadSection/ImageUploadSection'
import styled from 'styled-components'
import ButtonPrev from '../ui/ButtonPrev/ButtonPrev'
import SurveySection from '../sections/SurveySection/SurveySection'
import ResultSection from '../sections/ResultSection/ResultSection'

const TestBox = styled('div')`
  width: 100%;
  border-radius: ${({ theme }) => theme.ui.radius['20']};
  overflow: hidden;
  padding: 0 64px 32px;
  position: relative;

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
  padding: 24px 0 16px;
`

const manyControlsChild = '&:has(#controlsBox > :not(:only-child))' // если внутри #controlsBox > одного дочернего элемента
const StepsControlsBox = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  min-height: 40px;

  @media (${({ theme }) => theme.ui.breakpoints.xs}) {
    gap: 24px;

    ${manyControlsChild} {
      flex-direction: column-reverse;
      align-items: start;
    }
  }

  @media (${({ theme }) => theme.ui.breakpoints.m}) {
    ${manyControlsChild} {
      flex-direction: row;
      align-items: end;
    }
  }
`

const Step = styled('span')`
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.muted};
  font-size: 1.4rem;
  line-height: 1.25;
  font-weight: 500;
`

const manyControls = `&:has(> :not(:only-child))` // если внутри > одного контрола
const ControlsBox = styled('div')`
  display: flex;
  gap: 8px;

  @media (${({ theme }) => theme.ui.breakpoints.xs}) {
    ${manyControls} {
      color: tomato;
      flex-direction: column;
      width: 100%;
    }
  }

  @media (${({ theme }) => theme.ui.breakpoints.m}) {
    ${manyControls} {
      flex-direction: row-reverse;
    }

    ${manyControls} button {
      width: 100%;
    }
  }

  @media (${({ theme }) => theme.ui.breakpoints.l}) {
    ${manyControls} {
      width: auto;
    }
  }
`

function Test() {
  const { currentStep, totalSteps, maxReachedStep } = useAppSelector((state) => state.form)

  const nextControlsRef = useRef(null)
  const [nextControlsEl, setNextControlsEl] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (nextControlsRef.current) {
      setNextControlsEl(nextControlsRef.current)
    }
  }, [])
  return (
    <TestBox>
      <StepProgress totalParts={figcaptions.length} step={currentStep} />

      <Wrapper>
        {currentStep >= 1 && currentStep < 3 && (
          <ImageUploadSection nextControlsEl={nextControlsEl} />
        )}

        {((currentStep >= 2 && currentStep < 3) || maxReachedStep === 2) && (
          <SurveySection nextControlsEl={nextControlsEl} />
        )}

        {currentStep === 3 && <ResultSection nextControlsEl={nextControlsEl} />}

        <StepsControlsBox>
          <Step>
            Шаг {currentStep}/{totalSteps}
          </Step>

          <ControlsBox id='controlsBox' ref={nextControlsRef}>
            {currentStep === 2 && <ButtonPrev />}
          </ControlsBox>
        </StepsControlsBox>
      </Wrapper>
    </TestBox>
  )
}

export default Test
