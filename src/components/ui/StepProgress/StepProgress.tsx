import styled from 'styled-components'

interface ProgressBoxProps {
  $totalParts: number
}

interface ProgressProps {
  totalParts: number
  step: number
}

const StepProgressBox = styled('div')<ProgressBoxProps>`
  display: grid;
  grid-template-columns: ${({ $totalParts }) => `repeat(${$totalParts}, 1fr)`};
  height: 16px;
  margin: 0 -64px 48px;
  background-color: ${({ theme }) => theme.palette.blue['50']};
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
