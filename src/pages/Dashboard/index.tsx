import { DashboardCardSecond } from '../../components/DashboardCardSecond'
import { DashboardCard } from '../../components/DashboardCard/index'
import { Text } from '../../components/Text'
import { Truck, Cylinder } from '@phosphor-icons/react'
import {
  ContainerLeft,
  ContainerRight,
  FirstLine,
  FirstRow,
  SecondLine,
  StyledFlex,
} from './styles'

export const Dashboard = () => {
  return (
    <StyledFlex>
      <Text css={{ fontWeight: '600', fontSize: '24px' }}>
        Tempo por abastecimento por planta
      </Text>
      <FirstLine>
        <DashboardCard
          texttitle="Tempo Médio de Cadastro"
          timemin={10}
          state="green"
        />
        <DashboardCard
          texttitle="Tempo Médio de Carregamento"
          timemin={30}
          state="yellow"
        />
        <DashboardCard texttitle="Tempo por Etapa" timemin={20} state="green" />
        <DashboardCard
          texttitle="Tempo Médio de Pesagem"
          timemin={50}
          state="red"
        />
      </FirstLine>
      <SecondLine>
        <ContainerLeft>
          <FirstRow>
            <DashboardCardSecond
              texttitle="Quantidade de Carretas"
              num={30}
              state="green"
              icon={<Truck size={46} />}
            />
            <DashboardCardSecond
              texttitle="Quantidade de Cilindros"
              num={30}
              state="green"
              icon={<Cylinder size={46} />}
            />
          </FirstRow>
        </ContainerLeft>
        <ContainerRight>a</ContainerRight>
      </SecondLine>
    </StyledFlex>
  )
}
