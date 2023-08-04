import { CheckBox } from '../Checkbox'
import { InputSearch } from '../InputSearch'
import { Line } from '../Modal/styles'
import { useState } from 'react'
import {
  CheckboxItem,
  ContInput,
  ContainerCard,
  ContainerSearch,
  FirstLine,
  ScrollContainer,
  SearchLeft,
  SearchRight,
  Title,
} from './styles'
import { Button } from '../Button'

const estadosBrasil = [
  {
    id: 'sp',
    nome: 'São Paulo',
    cidades: [
      {
        nome: 'São Paulo',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua X, 123' },
          { nome: 'Endereço 2', endereco: 'Avenida Y, 456' },
          { nome: 'Endereço 3', endereco: 'Travessa Z, 789' },
        ],
      },
      {
        nome: 'Campinas',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua A, 101' },
          { nome: 'Endereço 2', endereco: 'Avenida B, 202' },
          { nome: 'Endereço 3', endereco: 'Travessa C, 303' },
        ],
      },
      {
        nome: 'Santos',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua D, 404' },
          { nome: 'Endereço 2', endereco: 'Avenida E, 505' },
          { nome: 'Endereço 3', endereco: 'Travessa F, 606' },
        ],
      },
    ],
  },
  {
    id: 'rj',
    nome: 'Rio de Janeiro',
    cidades: [
      {
        nome: 'Rio de Janeiro',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua G, 707' },
          { nome: 'Endereço 2', endereco: 'Avenida H, 808' },
          { nome: 'Endereço 3', endereco: 'Travessa I, 909' },
        ],
      },
      {
        nome: 'Niterói',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua J, 111' },
          { nome: 'Endereço 2', endereco: 'Avenida K, 222' },
          { nome: 'Endereço 3', endereco: 'Travessa L, 333' },
        ],
      },
      {
        nome: 'Cabo Frio',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua M, 444' },
          { nome: 'Endereço 2', endereco: 'Avenida N, 555' },
          { nome: 'Endereço 3', endereco: 'Travessa O, 666' },
        ],
      },
    ],
  },
  {
    id: 'mg',
    nome: 'Minas Gerais',
    cidades: [
      {
        nome: 'Belo Horizonte',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua P, 777' },
          { nome: 'Endereço 2', endereco: 'Avenida Q, 888' },
          { nome: 'Endereço 3', endereco: 'Travessa R, 999' },
        ],
      },
      {
        nome: 'Uberlândia',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua S, 1001' },
          { nome: 'Endereço 2', endereco: 'Avenida T, 2002' },
          { nome: 'Endereço 3', endereco: 'Travessa U, 3003' },
        ],
      },
      {
        nome: 'Juiz de Fora',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua V, 4004' },
          { nome: 'Endereço 2', endereco: 'Avenida W, 5005' },
          { nome: 'Endereço 3', endereco: 'Travessa X, 6006' },
        ],
      },
    ],
  },
  {
    id: 'rs',
    nome: 'Rio Grande do Sul',
    cidades: [
      {
        nome: 'Porto Alegre',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua Y, 7007' },
          { nome: 'Endereço 2', endereco: 'Avenida Z, 8008' },
          { nome: 'Endereço 3', endereco: 'Travessa A1, 9009' },
        ],
      },
      {
        nome: 'Caxias do Sul',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua B1, 1010' },
          { nome: 'Endereço 2', endereco: 'Avenida C1, 2020' },
          { nome: 'Endereço 3', endereco: 'Travessa D1, 3030' },
        ],
      },
      {
        nome: 'Pelotas',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua E1, 4040' },
          { nome: 'Endereço 2', endereco: 'Avenida F1, 5050' },
          { nome: 'Endereço 3', endereco: 'Travessa G1, 6060' },
        ],
      },
    ],
  },
  {
    id: 'ba',
    nome: 'Bahia',
    cidades: [
      {
        nome: 'Salvador',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua H1, 7070' },
          { nome: 'Endereço 2', endereco: 'Avenida I1, 8080' },
          { nome: 'Endereço 3', endereco: 'Travessa J1, 9090' },
        ],
      },
      {
        nome: 'Feira de Santana',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua K1, 10010' },
          { nome: 'Endereço 2', endereco: 'Avenida L1, 20020' },
          { nome: 'Endereço 3', endereco: 'Travessa M1, 30030' },
        ],
      },
      {
        nome: 'Vitória da Conquista',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua N1, 40040' },
          { nome: 'Endereço 2', endereco: 'Avenida O1, 50050' },
          { nome: 'Endereço 3', endereco: 'Travessa P1, 60060' },
        ],
      },
    ],
  },
  {
    id: 'pr',
    nome: 'Paraná',
    cidades: [
      {
        nome: 'Curitiba',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua Q1, 70070' },
          { nome: 'Endereço 2', endereco: 'Avenida R1, 80080' },
          { nome: 'Endereço 3', endereco: 'Travessa S1, 90090' },
        ],
      },
      {
        nome: 'Londrina',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua T1, 100100' },
          { nome: 'Endereço 2', endereco: 'Avenida U1, 200200' },
          { nome: 'Endereço 3', endereco: 'Travessa V1, 300300' },
        ],
      },
      {
        nome: 'Maringá',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua W1, 400400' },
          { nome: 'Endereço 2', endereco: 'Avenida X1, 500500' },
          { nome: 'Endereço 3', endereco: 'Travessa Y1, 600600' },
        ],
      },
    ],
  },
  {
    id: 'pe',
    nome: 'Pernambuco',
    cidades: [
      {
        nome: 'Recife',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua Z1, 700700' },
          { nome: 'Endereço 2', endereco: 'Avenida A2, 800800' },
          { nome: 'Endereço 3', endereco: 'Travessa B2, 900900' },
        ],
      },
      {
        nome: 'Olinda',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua C2, 1001000' },
          { nome: 'Endereço 2', endereco: 'Avenida D2, 2002000' },
          { nome: 'Endereço 3', endereco: 'Travessa E2, 3003000' },
        ],
      },
      {
        nome: 'Caruaru',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua F2, 4004000' },
          { nome: 'Endereço 2', endereco: 'Avenida G2, 5005000' },
          { nome: 'Endereço 3', endereco: 'Travessa H2, 6006000' },
        ],
      },
    ],
  },
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
            <ContInput>
              <InputSearch
                value={searchValueRight}
                onChange={setSearchValueRight}
              />
              <Button
                css={{ fontSize: '12px', width: '150px', height: '30px' }}
              >
                Marcar Todos
              </Button>
            </ContInput>
            <ScrollContainer></ScrollContainer>
          </SearchRight>
        </ContainerSearch>
      </FirstLine>
    </ContainerCard>
  )
}
