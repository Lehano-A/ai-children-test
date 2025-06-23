import { useState } from 'react'
import styled, { css } from 'styled-components'
import ArrowLeft from '../../../assets/icons/arrow-left.svg?react'
import ArrowRight from '../../../assets/icons/arrow-right.svg?react'
import DatePicker from 'react-datepicker'
import { ru } from 'date-fns/locale/ru'
import { IMaskInput } from 'react-imask'

import 'react-datepicker/dist/react-datepicker.css'
import './custom-date-picker.css'

const HeaderCalendar = styled('div')`
  display: flex;
  justify-content: space-between;
  font-family: 'CirceRounded';
  margin-bottom: 9px;
  padding: 12px;
`

const MothYearBox = styled('div')`
  display: flex;
  align-items: center;
`

const MonthName = styled('span')`
  padding: 0 8px;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.25;
  text-transform: capitalize;
`

const Year = styled('span')`
  padding: 0 8px;
  color: ${({ theme }) => theme.palette.muted2};
`

const svgStyle = css`
  height: 24px;
  width: 24px;
  stroke: ${({ theme }) => theme.palette.default}; /**/
`

const ArrowLeftIcon = styled(ArrowLeft)`
  ${svgStyle}
`
const ArrowRightIcon = styled(ArrowRight)`
  ${svgStyle}
`

const Button = styled('button')`
  border: none;
  background-color: transparent;
  width: 36px;
  height: 36px;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ButtonPrev = styled(Button)``
const ButtonNext = styled(Button)``

function CustomDatePicker({ id, name }: { id: string; name: string }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  return (
    <DatePicker
      required
      id={id}
      name={name}
      locale={ru}
      selected={selectedDate}
      dateFormat='dd.MM.yyyy'
      popperPlacement='bottom-end'
      placeholderText='28.07.1986'
      onChange={(date) => setSelectedDate(date)}
      customInput={<IMaskInput mask='00.00.0000' />}
      onKeyDown={(e) => {
        if (!/[0-9]|Backspace|Tab|ArrowLeft|ArrowRight/.test(e.key)) {
          e.preventDefault()
        }
      }}
      renderCustomHeader={({
        monthDate,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => {
        const monthFormatter = new Intl.DateTimeFormat('ru-RU', { month: 'long' })

        const monthName = monthFormatter.format(monthDate)
        const year = monthDate.getFullYear()

        return (
          <HeaderCalendar>
            <ButtonPrev onClick={decreaseMonth} disabled={prevMonthButtonDisabled} type='button'>
              <ArrowLeftIcon />
            </ButtonPrev>

            <MothYearBox>
              <MonthName>{monthName}</MonthName>
              <Year>{year}</Year>
            </MothYearBox>

            <ButtonNext onClick={increaseMonth} disabled={nextMonthButtonDisabled} type='button'>
              <ArrowRightIcon />
            </ButtonNext>
          </HeaderCalendar>
        )
      }}
    />
  )
}

export default CustomDatePicker
