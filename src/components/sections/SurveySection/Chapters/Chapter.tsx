import React from 'react'
import styled from 'styled-components'

const Title = styled('h2')`
  height: 22px;
  margin-bottom: 32px;
  letter-spaccing: 0.05px;
`

const FieldsetBox = styled('div')<{ $gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
`

type Gaps = 's' | 'm'
const gapSizes = {
  s: '16px',
  m: '32px',
}

function Chapter({
  children,
  title,
  gap = 's',
}: {
  children: React.ReactNode[]
  title: string
  gap?: Gaps
}) {
  return (
    <div>
      <Title>{title}</Title>

      <FieldsetBox $gap={gapSizes[gap]}>{children}</FieldsetBox>
    </div>
  )
}

export default Chapter
