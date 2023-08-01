import { CSS } from '@stitches/react'
import { ReactNode } from 'react'
import { StyledCard, TextContainer } from './styles'

interface KanBanProps {
  children: ReactNode
  css?: CSS
}

export const KanBanCard = ({ children, css }: KanBanProps) => {
  return (
    <StyledCard css={css}>
      <TextContainer>{children}</TextContainer>
    </StyledCard>
  )
}
