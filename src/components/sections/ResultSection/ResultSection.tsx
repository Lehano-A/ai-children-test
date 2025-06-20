import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { createPortal } from 'react-dom'
import { fetchResultProcessing } from '../../../redux/reducers/thunks/resultProcessing.thunk.'
import { RESULT_PROCESSING } from '../../../redux/reducers/slices/ui/ui.constants'
import Loader from '../../ui/Loader/Loader'
import styled from 'styled-components'
import UploadIcon from '../../../assets/icons/upload.svg?react'
import LetterIcon from '../../../assets/icons/letter.svg?react'
import Button from '../../ui/Button/Button'

const Title = styled('h2')`
  line-height: 1.1;
  margin-bottom: 24px;
`

const Text = styled('p')`
  white-space: pre-wrap;
  margin-bottom: 96px;
`

const InProcessBox = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  min-height: 353px;
`

const DownloadButton = styled(Button)``

const ShareButton = styled(Button)``

function ResultSection({ mainControlsEl }: { mainControlsEl: HTMLDivElement | null }) {
  const dispatch = useAppDispatch()
  const { taskId } = useAppSelector((state) => state.form)
  const { loading } = useAppSelector((state) => state.ui)
  const { dataFromApi } = useAppSelector((state) => state.resultProcessing)

  useEffect(() => {
    dispatch(fetchResultProcessing(taskId))
  }, [])

  const handleDownload = async () => {
    const link = document.createElement('a')
    link.href = '/src/assets/testResult.pdf'
    link.download = 'testResult.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      {loading[RESULT_PROCESSING] && (
        <InProcessBox>
          <h2>Анализ в обработке...</h2>
          <Loader color='blue' shade={100} />
          {/* <BoxLoader>

        </BoxLoader>*/}
        </InProcessBox>
      )}

      {!loading[RESULT_PROCESSING] && dataFromApi && (
        <>
          <Title>{dataFromApi.title}</Title>
          <Text>{dataFromApi.text}</Text>
        </>
      )}

      {mainControlsEl &&
        createPortal(
          <>
            <DownloadButton
              isDisabled={loading[RESULT_PROCESSING]}
              icon={<UploadIcon />}
              buttonName='Скачать отчет PDF'
              feature={{ disabledColor: 'warning' }}
              handleClick={handleDownload}
            />

            <ShareButton
              link='src/assets/testResult.pdf'
              isDisabled={loading[RESULT_PROCESSING]}
              icon={<LetterIcon />}
              buttonName='Поделиться результатами'
              feature={{ disabledColor: 'warning' }}
            />
          </>,
          mainControlsEl,
        )}
    </>
  )
}

export default ResultSection
