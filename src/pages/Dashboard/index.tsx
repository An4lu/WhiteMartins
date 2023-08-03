import { DashboardCardSecond } from '../../components/DashboardCardSecond'
import { DashboardCard } from '../../components/DashboardCard/index'
import { Text } from '../../components/Text'
import { Truck, Cylinder } from '@phosphor-icons/react'
import {
  ContDiv,
  ContainerLeft,
  ContainerRight,
  ContainerVolume,
  FirstLine,
  FirstRow,
  SecondLine,
  StyledFlex,
  TitleVolume,
} from './styles'
import { DashboardPlant } from '../../components/DashboardPlant'
import { CardVolume } from '../../components/CardVolume'

export const Dashboard = () => {
  return (
    <StyledFlex>
      <Text css={{ fontWeight: '600', fontSize: '24px' }}>
        Cockpit das Plantas
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

          <DashboardPlant />
        </ContainerLeft>
        <ContainerRight>
          <ContainerVolume>
            <TitleVolume>Volume Total Carregado</TitleVolume>
            <ContDiv>
              <CardVolume
                firstletter="O"
                state="red"
                element="Oxigênio"
                number={5000}
                totalm="Total ocupado médio é de 10.000m³"
              />
              <CardVolume
                firstletter="N"
                state="yellow"
                element="Nitrogênio"
                number={10500}
                totalm="Total ocupado médio é de 15.000m³"
              />
              <CardVolume
                firstletter="H"
                state="green"
                element="Hidrogênio"
                number={8540}
              />
            </ContDiv>
          </ContainerVolume>
        </ContainerRight>
      </SecondLine>
    </StyledFlex>
  )
}
