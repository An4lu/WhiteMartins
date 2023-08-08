import { ReactNode, MouseEventHandler } from 'react'
import { StyledButton } from './styles'
import { CSS } from '@stitches/react'

interface ButtonProps {
  children: ReactNode
  css?: CSS
  type?: 'button' | 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

export const Button = ({
  children,
  css,
  type,
  onClick,
  disabled,
}: ButtonProps) => (
  <StyledButton css={css} type={type} onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
)
