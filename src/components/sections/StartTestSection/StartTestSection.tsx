import styled from 'styled-components'
import Button from '../../Button/Button'
import { useDispatch } from 'react-redux'
import { runningTest } from '../../../redux/reducers/slices/test.slice'

const Section = styled('section')`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled('h1')`
  margin: 0 0 60px;
`

interface StartTestProps {
  title: string
}

function StartTestSection({ title }: StartTestProps) {
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(runningTest())
  }
  return (
    <Section>
      <Title>{title}</Title>
      <Button buttonName='Начать тест' handleClick={handleClick} />
    </Section>
  )
}

export default StartTestSection
