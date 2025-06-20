import styled, { css } from 'styled-components'
import type { StyleBoxButtonNameProps } from './Button.types'

export const primaryStyle = css`
  background-color: ${({ theme }) => theme.palette.blue['100']};
  color: ${({ theme }) => theme.palette.surface1};

  & svg {
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.palette.surface1};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue['110']};
  }

  &:disabled {
    color: ${({ theme }) => theme.palette.disabled};
    background-color: ${({ theme }) => theme.palette.disabledBtn};
    cursor: default;

    & svg {
      stroke: ${({ theme }) => theme.palette.disabled};
    }
  }
`

export const secondaryStyle = css`
  background-color: ${({ theme }) => theme.palette.blue['50']};
  color: ${({ theme }) => theme.palette.default};

  & svg {
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.palette.default};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue['70']};
  }
`

export const styleBoxButtonName = css<StyleBoxButtonNameProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: inherit;
  flex-direction: ${({ $iconPosition }) => ($iconPosition === 'left' ? 'row-reverse' : 'row')};
  visibility: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'visible')};
`

export const StyledButton = styled('button')<{
  $variant: 'primary' | 'secondary'
  $feature?: { disabledColor: string }
}>`
  height: 40px;
  position: relative;
  border-radius: ${({ theme }) => theme.ui.radius['100']};
  padding: 0 24px;
  font-size: 1.6rem;
  border: 0;
  cursor: pointer;
  transition: background-color 0.15s ease;
  ${({ $variant }) => ($variant === 'primary' ? primaryStyle : secondaryStyle)}

  ${({ theme, $feature }) =>
    $feature?.disabledColor === 'warning' &&
    `&:disabled {
     background-color: ${theme.palette.orange['300']};
     color: ${theme.palette.surface1};

     & svg {
     stroke: ${theme.palette.surface1};

     }
    }`}
`

export const BoxButtonName = styled('div')<StyleBoxButtonNameProps>`
  ${styleBoxButtonName}
`

export const BoxLoader = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Link = styled('a')<StyleBoxButtonNameProps>`
  ${styleBoxButtonName}

  text-decoration: none;
`
