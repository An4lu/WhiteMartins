import {
  ContState,
  ContText,
  ContTime,
  ContainerVolume,
  DivLeft,
  DivRight,
  Letter,
  M,
  Min,
  Text,
} from './styles'

interface ElementsProps {
  firstletter: string
  element: string
  number: number
  totalm?: number
  state: 'green' | 'yellow' | 'red'
}

export const CardVolume = ({
  firstletter,
  element,
  number,
  totalm,
  state,
}: ElementsProps) => {
  return (
    <ContainerVolume>
      <DivLeft>
        <Letter>{firstletter}</Letter>
        <Text>{element}</Text>
      </DivLeft>
      <DivRight>
        <ContState>
          <ContTime state={state}>
            <Min>{number}</Min> <M>m³</M>
          </ContTime>
          <ContText>Total Ocupado médio é de {totalm}m³</ContText>
        </ContState>
      </DivRight>
    </ContainerVolume>
  )
}
