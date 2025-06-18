import styled, { css } from 'styled-components'
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker'
import { nanoid } from 'nanoid'
import React, { useState } from 'react'

const Box = styled('div')``

const inputFieldStyle = css<{ $hasValue: boolean; $height: string }>`
  width: 100%;
  height: 100%;
  outline: none;
  padding: 9px 12px;
  border: 1px solid ${({ theme }) => theme.palette.muted};
  border-radius: ${({ theme }) => theme.ui.radius['6']};
  border-color: ${({ theme, $hasValue }) => $hasValue && theme.palette.violet['100']};

  &:hover,
  &:valid,
  &:focus {
    border-color: ${({ theme }) => theme.palette.violet['100']};
  }
`

const InputField = styled('input')<{ $hasValue: boolean; $height: string }>`
  ${inputFieldStyle}
`

const Label = styled('label')`
  display: inline-block;
  margin-bottom: 4px;
  line-height: 1.35;
`

const heights = { s: '40px', xl: '80px', xxl: '96px' }

const Textarea = styled('textarea')<{ $hasValue: boolean; $height: string }>`
  ${inputFieldStyle}

  height: ${({ $height }) => $height};
  resize: none;
`

const Input = React.memo(function Input({
  type = 'text',
  label,
  height = 's',
  name,
}: {
  type?: 'text' | 'date' | 'textarea'
  label: string
  height?: 's' | 'xl' | 'xxl'
  name: string
}) {
  const [value, setValue] = useState('')
  const id = nanoid()

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    setValue(e.target.value)
  }
  return (
    <Box>
      <Label htmlFor={id}>{label}</Label>

      {type === 'text' && (
        <InputField
          $hasValue={Boolean(value)}
          $height={heights[height]}
          id={id}
          type={type}
          onChange={handleChange}
          name={name}
          required
        />
      )}

      {type === 'date' && <CustomDatePicker id={id} name={name} />}

      {type === 'textarea' && (
        <Textarea
          $hasValue={Boolean(value)}
          $height={heights[height]}
          id={id}
          onChange={handleChange}
          name={name}
          required
        />
      )}
    </Box>
  )
})

export default Input
