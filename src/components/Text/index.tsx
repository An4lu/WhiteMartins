import { CSS } from '@stitches/react'
import { ReactNode } from 'react'
import { StyledText } from './styles'

interface TextProps {
  children: ReactNode
  css?: CSS
}

export const Text = ({ children, css }: TextProps) => {
  return <StyledText css={css}>{children}</StyledText>
}
