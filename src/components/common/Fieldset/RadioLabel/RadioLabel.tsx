import styled from 'styled-components'
import { nanoid } from 'nanoid'

const CommonBox = styled('div')`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`

const InputBox = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 20px;
  height: 20px;
`
const Input = styled('input')`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  &:checked ~ span::before {
    display: inline-block;
  }

  &:not(:checked) ~ span {
    background-color: ${({ theme }) => theme.palette.surface5};
  }

  &:hover:checked ~ span {
    background-color: ${({ theme }) => theme.palette.blue['110']};
  }

  &:hover ~ span {
    background-color: ${({ theme }) => theme.palette.blue['100']};
  }
`
const PseudoRadio = styled('span')`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.palette.blue['100']};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition: background-color 0.15s ease;

  &::before {
    content: '';
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6.67px;
    height: 6.67px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.surface1};
  }
`

const Label = styled('label')<{ $labelSize: string; $labelWidth?: string }>`
  font-size: ${({ $labelSize }) => $labelSize};
  line-height: 1.35;
  cursor: pointer;
  width: ${({ $labelWidth }) => $labelWidth};
`

const fontSizes = {
  xs: '1.2rem',
  s: '1.4rem',
}

function RadioLabel({
  label,
  labelWidth,
  value,
  name,
  labelSize = 's',
}: {
  label: string
  value: string
  name: string
  labelWidth?: string
  labelSize?: 'xs' | 's'
}) {
  const id = nanoid()
  return (
    <CommonBox>
      <InputBox>
        <Input required type='radio' id={id} value={value} name={name} />
        <PseudoRadio />
      </InputBox>

      <Label htmlFor={id} $labelWidth={labelWidth} $labelSize={fontSizes[labelSize]}>
        {label}
      </Label>
    </CommonBox>
  )
}

export default RadioLabel
