import styled from 'styled-components'
import RadioLabel from './RadioLabel/RadioLabel'
import React from 'react'

type Radio = [string, string][]
type DefaultRadioVariants = [string, string, string][]

type Direction = 'row' | 'column'
interface Breakpoints {
  s?: Direction
  m?: Direction
  xl?: Direction
}

const FieldsetBox = styled('fieldset')`
  display: flex;
  border: none;
  margin: 0;
  padding: 0;
`

const RadioGroupBox = styled('div')<{ $breakpoints: Breakpoints }>`
  display: flex;

  @media (min-width: 296px) {
    flex-direction: ${({ $breakpoints }) => $breakpoints.s};
    gap: 8px;
  }

  @media (min-width: 600px) {
    flex-direction: ${({ $breakpoints }) => $breakpoints.m};
  }

  @media (min-width: 904px) {
    flex-direction: ${({ $breakpoints }) => $breakpoints.xl};
    gap: 24px;
  }
`

const Legend = styled('legend')`
  display: inline-block;
  min-height: 22px;
  line-height: 1.35;
  margin-bottom: 8px;
`

const defaultRadioVariants: DefaultRadioVariants = [
  ['Очень редко', '1', '69px'],
  ['Редко', '2', '32px'],
  ['Иногда', '3', '39px'],
  ['Часто', '4', '31px'],
  ['Всегда', '5', '36px'],
]

const Fieldset = React.memo(function RadioGroup({
  name,
  radio,
  legend,
  breakpoints = {
    s: 'column',
    m: 'row',
    xl: 'row',
  },
}: {
  name: string
  legend: string
  radio?: Radio
  breakpoints?: Breakpoints
}) {
  function createRadio(labels: Radio | DefaultRadioVariants) {
    return labels.map(([label, value, width], id) => (
      <RadioLabel label={label} labelWidth={width} value={value} name={name} key={label + id} />
    ))
  }

  return (
    <FieldsetBox>
      <Legend>{legend}</Legend>

      <RadioGroupBox $breakpoints={breakpoints}>
        {radio && radio.length > 0 ? createRadio(radio) : createRadio(defaultRadioVariants)}
      </RadioGroupBox>
    </FieldsetBox>
  )
})

export default Fieldset
