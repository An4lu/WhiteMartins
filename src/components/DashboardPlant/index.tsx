import { CheckBox } from '../Checkbox'
import { InputSearch } from '../InputSearch'
import { Line } from '../Modal/styles'
import { useState } from 'react'
import {
  CheckboxItem,
  ContainerCard,
  ContainerSearch,
  FirstLine,
  ScrollContainer,
  SearchLeft,
  SearchRight,
  Title,
} from './styles'

const estadosBrasil = [
  { id: 'sp', nome: 'São Paulo' },
  { id: 'rj', nome: 'Rio de Janeiro' },
  { id: 'mg', nome: 'Minas Gerais' },
  { id: 'rs', nome: 'Rio Grande do Sul' },
  { id: 'ba', nome: 'Bahia' },
  { id: 'pr', nome: 'Paraná' },
  { id: 'pe', nome: 'Pernambuco' },
]

export const DashboardPlant = () => {
  const [selectedStates, setSelectedStates] = useState<Record<string, boolean>>(
    {},
  )
  const [searchValueLeft, setSearchValueLeft] = useState('')
  const [searchValueRight, setSearchValueRight] = useState('')

  const filteredStatesLeft = estadosBrasil.filter((estado) =>
    estado.nome.toLowerCase().includes(searchValueLeft.toLowerCase()),
  )

  const filteredStatesRight = estadosBrasil.filter((estado) =>
    estado.nome.toLowerCase().includes(searchValueRight.toLowerCase()),
  )

  const handleCheckChange = (id: string, value: boolean) => {
    setSelectedStates({
      ...selectedStates,
      [id]: value,
    })
  }

  return (
    <ContainerCard>
      <FirstLine>
        <Title>Plantas</Title>
        <Line />
        <ContainerSearch>
          <SearchLeft>
            <InputSearch
              value={searchValueLeft}
              onChange={setSearchValueLeft}
            />
            <ScrollContainer>
              {filteredStatesLeft.map((estado) => (
                <CheckboxItem key={estado.id}>
                  <CheckBox
                    id={estado.id}
                    onValueChange={(value) =>
                      handleCheckChange(estado.id, value)
                    }
                    checked={selectedStates[estado.id]}
                  >
                    {estado.nome}
                  </CheckBox>
                </CheckboxItem>
              ))}
            </ScrollContainer>
          </SearchLeft>
          <SearchRight>
            <InputSearch
              value={searchValueRight}
              onChange={setSearchValueRight}
            />
            <ScrollContainer></ScrollContainer>
          </SearchRight>
        </ContainerSearch>
      </FirstLine>
    </ContainerCard>
  )
}
