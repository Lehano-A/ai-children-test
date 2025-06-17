import { Slide, Snackbar, type SlideProps } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from 'styled-components'
import { closeNotification } from '../../redux/reducers/slices/notification/notification.slice'
import type { RootState } from '../../redux/store'

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction='down' />
}

function Notification() {
  const { isOpen, message, status } = useSelector((state: RootState) => state.notification)

  const dispatch = useDispatch()

  const theme = useTheme()

  return (
    <Snackbar
      color='lime'
      open={isOpen}
      onClose={() => dispatch(closeNotification())}
      slots={{ transition: SlideTransition }}
      message={message}
      key={Math.random()}
      autoHideDuration={8000}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      sx={{
        '.MuiSnackbarContent-message': { display: 'flex', flexDirection: 'column' },

        '.MuiPaper-root': { fontFamily: 'inherit', backgroundColor: theme.palette[status] },
      }}
    />
  )
}

export default Notification
