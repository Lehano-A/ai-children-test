import styled, { css } from 'styled-components'
import Loader from '../../Loader/Loader'
import React from 'react'

const primaryStyle = css`
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

const secondaryStyle = css`
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

interface StyleBoxButtonNameProps {
  $iconPosition?: 'left' | 'right'
  $isLoading?: boolean
}

const styleBoxButtonName = css<StyleBoxButtonNameProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: inherit;
  flex-direction: ${({ $iconPosition }) => ($iconPosition === 'left' ? 'row-reverse' : 'row')};
  visibility: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'visible')};
`

const StyledButton = styled('button')<{
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

const BoxButtonName = styled('div')<StyleBoxButtonNameProps>`
  ${styleBoxButtonName}
`

const BoxLoader = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export interface ButtonProps {
  link?: string
  formName?: string
  icon?: React.ReactNode
  type?: 'button' | 'submit'
  iconPosition?: 'left' | 'right'
  variant?: 'primary' | 'secondary'
  feature?: { disabledColor: string }
  isLoading?: boolean
  isDisabled?: boolean
  buttonName?: string
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Link = styled('a')<StyleBoxButtonNameProps>`
  ${styleBoxButtonName}

  text-decoration: none;
`

function Button({
  icon,
  buttonName,
  handleClick,
  feature,
  link,
  formName,
  type = 'button',
  isLoading = false,
  isDisabled = false,
  variant = 'primary',
  iconPosition = 'right',
}: ButtonProps) {
  return (
    <StyledButton
      onClick={handleClick}
      $variant={variant}
      $feature={feature}
      disabled={isDisabled}
      type={type}
      form={formName}
    >
      {link ? (
        <Link href={link} target='_blank' rel='noreferrer'>
          {buttonName} {icon}
        </Link>
      ) : (
        <BoxButtonName $isLoading={isLoading} $iconPosition={iconPosition}>
          {buttonName} {icon}
        </BoxButtonName>
      )}

      {isLoading && (
        <BoxLoader>
          <Loader />
        </BoxLoader>
      )}
    </StyledButton>
  )
}

export default Button
