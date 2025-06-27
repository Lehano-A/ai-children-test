import styled from 'styled-components'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const Button = styled('button')`
  position: fixed;
  z-index: 100000;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.palette.blue['100']};
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue['110']};
  }

  & svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.palette.surface1};
  }
`

function ButtonFillData({ handleFill }: { handleFill: () => void }) {
  return (
    <Button onClick={handleFill}>
      <AutoAwesomeIcon />
    </Button>
  )
}

export default ButtonFillData
