import React from 'react'
import styled from 'styled-components'

const ChapterBox = styled('div')<{ $gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
`

const Title = styled('h2')`
  min-height: 22px;
  letter-spacing: 0.05px;
`

const FieldsetBox = styled('div')<{ $gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
`

type Gaps = { chapter?: 's' | 'm'; fieldset?: 's' | 'm' }
const gapSizes = {
  chapter: { s: '24px', m: '32px' },
  fieldset: { s: '16px', m: '32px' },
}

function Chapter({
  children,
  title,
  gap,
}: {
  children: React.ReactNode[]
  title: string
  gap?: Gaps
}) {
  const chapterGap = gap?.chapter ?? 'm'
  const fieldsetGap = gap?.fieldset ?? 'm'

  return (
    <ChapterBox $gap={gapSizes.chapter[chapterGap]}>
      <Title>{title}</Title>

      <FieldsetBox $gap={gapSizes.fieldset[fieldsetGap]}>{children}</FieldsetBox>
    </ChapterBox>
  )
}

export default Chapter
