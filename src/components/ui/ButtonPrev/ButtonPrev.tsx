import Button from '../Button/Button'
import ArrowLeftIcon from '../../../assets/icons/arrow-left.svg?react'
import { useDispatch } from 'react-redux'
import { prevStep } from '../../../redux/reducers/slices/form/form.slice'

function ButtonPrev() {
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(prevStep())
  }

  return (
    <Button
      buttonName='К загрузке рисунков'
      icon={<ArrowLeftIcon />}
      variant='secondary'
      iconPosition='left'
      handleClick={handleClick}
    />
  )
}

export default ButtonPrev
