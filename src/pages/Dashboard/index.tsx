import { Text } from '../../components/Text'
import { StyledFlex } from './styles'

export const Dashboard = () => {
  return (
    <StyledFlex>
      <Text css={{ fontWeight: '600', fontSize: '24px' }}>
        Tempo por abastecimento por planta
      </Text>
    </StyledFlex>
  )
}
