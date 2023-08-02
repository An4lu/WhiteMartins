import { ReactNode } from 'react'
import {
  ContainerCard,
  ContState,
  ContCont,
  Min,
  Title,
  ContIcon,
} from './styles'

interface DashProps {
  texttitle: string
  num: number
  state: 'green' | 'yellow' | 'red'
  icon: ReactNode
}

export const DashboardCardSecond = ({
  texttitle,
  num,
  state,
  icon,
}: DashProps) => {
  return (
    <ContainerCard>
      <Title>{texttitle}</Title>
      <ContState state={state}>
        <ContCont>
          <Min>{num}</Min>
          <ContIcon>{icon}</ContIcon>
        </ContCont>
      </ContState>
    </ContainerCard>
  )
}
