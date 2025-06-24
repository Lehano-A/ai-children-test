import styled from 'styled-components'

interface ProgressBoxProps {
  $totalParts: number
}

interface ProgressProps {
  totalParts: number
  step: number
}

const StepProgressBox = styled('div')<ProgressBoxProps>`
  flex-shrink: 0;
  display: grid;
  grid-template-columns: ${({ $totalParts }) => `repeat(${$totalParts}, 1fr)`};
  height: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.blue['50']};
  overflow: hidden;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`

const Part = styled('div')<{ $needHighlight: boolean }>`
  background-color: ${({ $needHighlight, theme }) =>
    $needHighlight ? theme.palette.blue['100'] : 'transparent'};
`

function StepProgress({ totalParts, step }: ProgressProps) {
  return (
    <StepProgressBox $totalParts={totalParts}>
      {new Array(totalParts).fill(0).map((_, id) => (
        <Part key={id} $needHighlight={id + 1 <= step} />
      ))}
    </StepProgressBox>
  )
}

export default StepProgress
