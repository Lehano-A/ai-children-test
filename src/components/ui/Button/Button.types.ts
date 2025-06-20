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

export interface StyleBoxButtonNameProps {
  $iconPosition?: 'left' | 'right'
  $isLoading?: boolean
}
