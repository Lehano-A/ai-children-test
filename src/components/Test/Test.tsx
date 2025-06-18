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
  margin-top: 32px;
  position: relative;
`

const Step = styled('span')`
  color: ${({ theme }) => theme.palette.muted};
  font-size: 1.4rem;
  line-height: 1.25;
  font-weight: 500;
`

const StepsBox = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
`

const ControlsBox = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const MainControls = styled(ControlsBox)``

function Test() {
  const { currentStep, totalSteps, maxReachedStep } = useAppSelector((state) => state.form)

  const mainControlsRef = useRef(null)
  const [mainControlsEl, setMainControlsEl] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (mainControlsRef.current) {
      setMainControlsEl(mainControlsRef.current)
    }
  }, [])
  return (
    <TestBox>
      <StepProgress totalParts={figcaptions.length} step={currentStep} />

      {currentStep >= 1 && currentStep < 3 && (
        <ImageUploadSection mainControlsEl={mainControlsEl} />
      )}

      {((currentStep >= 2 && currentStep < 3) || maxReachedStep === 2) && (
        <SurveySection mainControlsEl={mainControlsEl} />
      )}

      {currentStep === 3 && <ResultSection mainControlsEl={mainControlsEl} />}

      <StepsBox>
        <Step>
          Шаг {currentStep}/{totalSteps}
        </Step>

        <ControlsBox>
          {currentStep === 2 && <ButtonPrev />}
          <MainControls ref={mainControlsRef}></MainControls>
        </ControlsBox>
      </StepsBox>
    </TestBox>
  )
}

export default Test
