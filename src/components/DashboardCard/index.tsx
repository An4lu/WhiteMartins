import { Alarm } from '@phosphor-icons/react'
import { ContainerCard, ContIcon, ContState, ContTime, M, Min, Title } from "./styles"

interface DashProps {
  texttitle: string
  timemin: number
  state: 'green | yellow | red'
}

export const DashboardCard = ({ texttitle, timemin, state }: DashProps) => {
  return (
    <ContainerCard>
      <Title>{texttitle}</Title>
      <ContState state={state}>
        <ContTime>
          <Min>{timemin}</Min> <M>min</M>
        </ContTime>
        <ContIcon>
          <Alarm size={36} />
        </ContIcon>
      </ContState>
    </ContainerCard>
  )
}