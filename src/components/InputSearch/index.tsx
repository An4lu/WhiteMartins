import { Container, StyledInput, IconContainer } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react'

interface InputSearchProps {
  value: string
  onChange: (value: string) => void
}

export const InputSearch = ({ value, onChange }: InputSearchProps) => {
  return (
    <Container>
      <StyledInput
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <IconContainer>
        <MagnifyingGlass size={16} color="#333333" weight="bold" />
      </IconContainer>
    </Container>
  )
}
