import styled from 'styled-components'
import Button from '../../ui/Button/Button'
import { useDispatch } from 'react-redux'
import { runningTest } from '../../../redux/reducers/slices/components/test/test.slice'

const Section = styled('section')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`

const Title = styled('h1')`
  text-align: center;
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
