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

function ResultSection({ nextControlsEl }: { nextControlsEl: HTMLDivElement | null }) {
  const dispatch = useAppDispatch()
  const { taskId } = useAppSelector((state) => state.form)
  const { loading } = useAppSelector((state) => state.ui)
  const { dataFromApi } = useAppSelector((state) => state.resultProcessing)

  useEffect(() => {
    dispatch(fetchResultProcessing(taskId))
  }, [])

  function handleDownload() {
    const link = document.createElement('a')
    link.href = '/testResult.pdf'
    link.download = 'testResult.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  function handleLinkOpen() {
    const link = document.createElement('a')
    link.href = '/testResult.pdf'
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.click()
  }

  return (
    <>
      {loading[RESULT_PROCESSING] && (
        <InProcessBox>
          <h2>Анализ в обработке...</h2>
          <Loader color='blue' shade={100} />
        </InProcessBox>
      )}

      {!loading[RESULT_PROCESSING] && dataFromApi && (
        <div id='testResult'>
          <Title>{dataFromApi.title}</Title>
          <Text>{dataFromApi.text}</Text>
        </div>
      )}

      {nextControlsEl &&
        createPortal(
          <>
            <DownloadButton
              icon={<UploadIcon />}
              isDisabled={loading[RESULT_PROCESSING]}
              buttonName='Скачать отчет PDF'
              feature={{ disabledColor: 'warning' }}
              handleClick={handleDownload}
            />

            <ShareButton
              icon={<LetterIcon />}
              isDisabled={loading[RESULT_PROCESSING]}
              buttonName='Поделиться результатами'
              feature={{ disabledColor: 'warning' }}
              handleClick={handleLinkOpen}
            />
          </>,
          nextControlsEl,
        )}
    </>
  )
}

export default ResultSection
