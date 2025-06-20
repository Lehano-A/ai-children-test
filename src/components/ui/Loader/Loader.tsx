import { CircularProgress } from '@mui/material'
import { useTheme } from 'styled-components'
import type { ThemeType } from '../../../types/theme'

function Loader({
  color = 'surface1',
  shade,
}: {
  color?: keyof ThemeType['palette']
  shade?: number
}) {
  const theme = useTheme()

  return (
    <CircularProgress
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiCircularProgress-circle': {
          stroke: shade ? theme.palette[color][shade] : theme.palette[color],
        },
      }}
    />
  )
}

export default Loader
