import styled, { css } from 'styled-components'
import ThumbUp from '../../assets/icons/thumbs-up.svg?react'
import Flag from '../../assets/icons/flag.svg?react'

const CommonBox = styled('div')`
  background-color: ${({ theme }) => theme.palette.red['50']};
  padding: 24px;
  border-radius: ${({ theme }) => theme.ui.radius['8']};
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ParagraphBox = styled('div')`
  display: flex;
  gap: 16px;
`

const Paragraph = styled('p')`
  font-size: 1.4rem;
  line-height: 1.43;
`

const svgStyle = css`
  /* display: inline-block; */
  flex-shrink: 0;
  width: 32px;
  height: 32px; /* */
`

const ThumbUpIcon = styled(ThumbUp)`
  ${svgStyle}
`

const FlagIcon = styled(Flag)`
  ${svgStyle}
`

function ParentInstructions() {
  return (
    <CommonBox>
      <ParagraphBox>
        <ThumbUpIcon />
        <Paragraph>
          Пожалуйста, внимательно прочитайте каждый вопрос и выберите наиболее подходящий вариант
          ответа, отражающий поведение и эмоциональное состояние вашего ребенка в течение последних
          2-4 недель. Отвечайте максимально честно и искренне, так как от этого зависит точность
          оценки психоэмоционального развития Вашего ребенка.
        </Paragraph>
      </ParagraphBox>

      <ParagraphBox>
        <FlagIcon />
        <Paragraph>Все вопросы обязательны к заполнению</Paragraph>
      </ParagraphBox>
    </CommonBox>
  )
}

export default ParentInstructions
