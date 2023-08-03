import React from 'react'
import { Container, StyledInput, IconContainer } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react'

export const InputSearch = () => {
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <Container>
      <StyledInput
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <IconContainer>
        <MagnifyingGlass size={16} color="#333333" weight="bold" />
      </IconContainer>
    </Container>
  )
}
