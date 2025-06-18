import styled from 'styled-components'
import RadioLabel from './RadioLabel/RadioLabel'
import React from 'react'

type Radio = [string, string][]
type DefaultRadioVariants = [string, string, string][]

const FieldsetBox = styled('fieldset')`
  display: flex;
  border: none;
  margin: 0;
  padding: 0;
`

const RadioGroupBox = styled('div')<{ $direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: 24px;
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
  direction = 'row',
}: {
  name: string
  legend: string
  radio?: Radio
  direction?: 'row' | 'column'
}) {
  function createRadio(labels: Radio | DefaultRadioVariants) {
    return labels.map(([label, value, width], id) => (
      <RadioLabel label={label} labelWidth={width} value={value} name={name} key={label + id} />
    ))
  }

  return (
    <FieldsetBox>
      <Legend>{legend}</Legend>

      <RadioGroupBox $direction={direction}>
        {radio && radio.length > 0 ? createRadio(radio) : createRadio(defaultRadioVariants)}
      </RadioGroupBox>
    </FieldsetBox>
  )
})

export default Fieldset
