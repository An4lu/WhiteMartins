import { DashboardCard } from '../../components/DashboardCard/index'
import { Text } from '../../components/Text'
import { FirstLine, StyledFlex } from './styles'

export const Dashboard = () => {

  const dashboardData = [
    {
      texttitle: 'Tempo Médio de Cadastro',
      time: '10',
      state: 'green',
    },
    {
      texttitle: 'Tempo Médio de Carregamento',
      time: '30',
      state: 'yellow',
    },
    {
      texttitle: 'Tempo por Etapa',
      time: '20',
      state: 'green',
    },
    {
      texttitle: 'Tempo Médio de Pesagem',
      time: '50',
      state: 'red',
    },
  ]

  return (
    <StyledFlex>
      <Text css={{ fontWeight: '600', fontSize: '24px' }}>
        Tempo por abastecimento por planta
      </Text>
      <FirstLine>
      {dashboardData.map((item) => (
          <DashboardCard texttitle={item.texttitle} timemin={parseInt(item.time)} state={item.state} />
        ))}
      </FirstLine>
    </StyledFlex>
  )
}
