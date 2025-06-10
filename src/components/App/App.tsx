import { useSelector } from 'react-redux'
import StartTestSection from '../sections/StartTestSection/StartTestSection'
import type { RootState } from '../../redux/store'
import Test from '../Test/Test'
import styled from 'styled-components'
import Notification from '../Notification/Notification'

const Main = styled('main')`
  min-height: 100vh;
  max-width: 904px;
  width: 100%;
  display: flex;
  margin: 0 auto;
`

function App() {
  const isRunningTest = useSelector((state: RootState) => state.test.isRunningTest)

  return (
    <>
      <Main>
        {isRunningTest ? (
          <Test />
        ) : (
          <StartTestSection title='Психодиагностический тест для детей' />
        )}
      </Main>

      <Notification />
    </>
  )
}

export default App
