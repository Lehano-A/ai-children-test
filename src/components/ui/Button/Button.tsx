import Loader from '../Loader/Loader'
import type { ButtonProps } from './Button.types'
import { BoxButtonName, BoxLoader, Link, StyledButton } from './Button.styles'

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
