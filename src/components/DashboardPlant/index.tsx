import { CheckBox } from '../Checkbox'
import { InputSearch } from '../InputSearch'
import { Line } from '../Modal/styles'
import { useState } from 'react'
import {
  CheckboxItem,
  ContCheck,
  ContInput,
  ContainerAdress,
  ContainerCard,
  ContainerSearch,
  DivCheck,
  FirstLine,
  Item2Check,
  ItemCheck,
  ScrollContainer,
  SearchLeft,
  SearchRight,
  Title,
  TitleCheck,
  TitleSecond,
} from './styles'
import { Button } from '../Button'
import { MapPin } from '@phosphor-icons/react'

const estadosBrasil = [
  {
    id: 'sp',
    nome: 'São Paulo',
    tempomedio: 20,
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
    ],
  },
  {
    id: 'rj',
    nome: 'Rio de Janeiro',
    tempomedio: 35,
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
        ],
      },
      {
        nome: 'Vitória da Conquista',
        enderecos: [
          { nome: 'Endereço 1', endereco: 'Rua N1, 40040' },
          { nome: 'Endereço 2', endereco: 'Avenida O1, 50050' },
        ],
      },
    ],
  },
]

const initialSelectedStates: Record<string, boolean> = {}
estadosBrasil.forEach((estado) => {
  initialSelectedStates[estado.id] = true
})

const initialSelectedAddresses: Record<string, boolean> = {}
estadosBrasil.forEach((estado) => {
  estado.cidades.forEach((cidade) => {
    cidade.enderecos.forEach((endereco) => {
      initialSelectedAddresses[endereco.endereco] = true
    })
  })
})

export const DashboardPlant = () => {
  const [selectedStates, setSelectedStates] = useState(initialSelectedStates)
  const [selectedCities, setSelectedCities] = useState(
    estadosBrasil.flatMap((estado) => estado.cidades),
  )

  const [selectAllStates, setSelectAllStates] = useState(true)
  const [searchValueLeft, setSearchValueLeft] = useState('')
  const [searchValueRight, setSearchValueRight] = useState('')
  const [selectedAddresses, setSelectedAddresses] = useState(
    initialSelectedAddresses,
  )

  const filteredStatesLeft = estadosBrasil.filter((estado) =>
    estado.nome.toLowerCase().includes(searchValueLeft.toLowerCase()),
  )

  const handleCheckChange = (id: string, value: boolean) => {
    setSelectedStates({
      ...selectedStates,
      [id]: true,
    })

    const selectedState = estadosBrasil.find((estado) => estado.id === id)
    if (selectedState) {
      if (value) {
        setSelectedCities(selectedCities.concat(selectedState.cidades))
      } else {
        const citiesToRemove = new Set(
          selectedState.cidades.map((cidade) => cidade.nome),
        )
        setSelectedCities(
          selectedCities.filter((cidade) => !citiesToRemove.has(cidade.nome)),
        )
        const newSelectedAddresses = { ...selectedAddresses }
        selectedState.cidades.forEach((cidade) => {
          cidade.enderecos.forEach((endereco) => {
            delete newSelectedAddresses[endereco.endereco]
          })
        })
        setSelectedAddresses(newSelectedAddresses)
      }
    }
  }

  const filteredAddresses = estadosBrasil
    .filter((estado) => selectedStates[estado.id])
    .flatMap((estado) =>
      estado.cidades.flatMap((cidade) =>
        cidade.enderecos.filter((endereco) =>
          endereco.nome.toLowerCase().includes(searchValueRight.toLowerCase()),
        ),
      ),
    )

  const handleToggleAll = () => {
    const newSelectedAddresses = { ...selectedAddresses }
    const markAll = !filteredAddresses.every(
      (endereco) => selectedAddresses[endereco.endereco],
    )

    filteredAddresses.forEach((endereco) => {
      newSelectedAddresses[endereco.endereco] = markAll
    })

    setSelectedAddresses(newSelectedAddresses)

    setSelectAllRight(markAll)
  }

  const handleCheckChangeAll = (cidade: any, value: boolean) => {
    const newSelectedAddresses = { ...selectedAddresses }
    cidade.enderecos.forEach((endereco: any) => {
      newSelectedAddresses[endereco.endereco] = value
    })
    setSelectedAddresses(newSelectedAddresses)

    setSelectAllRight(value)
  }

  const handleToggleAllStates = (value: boolean) => {
    setSelectAllStates(value)
    const newSelectedStates: Record<string, boolean> = {}
    estadosBrasil.forEach((estado) => {
      newSelectedStates[estado.id] = value
    })
    setSelectedStates(newSelectedStates)
    if (value) {
      setSelectedCities(estadosBrasil.flatMap((estado) => estado.cidades))
    } else {
      setSelectedCities([])
    }
  }

  const [selectAllRight, setSelectAllRight] = useState(true)

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
              <CheckboxItem>
                <CheckBox
                  id="selectAll"
                  onValueChange={handleToggleAllStates}
                  checked={selectAllStates}
                >
                  Selecionar Todos
                </CheckBox>
              </CheckboxItem>
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
                onClick={handleToggleAll}
              >
                Marcar Todos
              </Button>
            </ContInput>
            <ScrollContainer>
              {selectedCities.map((cidade, cityIndex) => (
                <ContCheck key={cityIndex}>
                  <TitleCheck>
                    <CheckBox
                      id={cityIndex.toString()}
                      onValueChange={(value) =>
                        handleCheckChangeAll(cidade, value)
                      }
                      checked={selectAllRight}
                    >
                      <TitleSecond>{cidade.nome}</TitleSecond>
                    </CheckBox>
                  </TitleCheck>
                  {cidade.enderecos
                    .filter((endereco) =>
                      endereco.nome
                        .toLowerCase()
                        .includes(searchValueRight.toLowerCase()),
                    )
                    .map((endereco, index) => (
                      <CheckboxItem key={index}>
                        <DivCheck>
                          <CheckBox
                            id={endereco.endereco}
                            onValueChange={(value) => {
                              setSelectedAddresses({
                                ...selectedAddresses,
                                [endereco.endereco]: value,
                              })
                            }}
                            checked={selectedAddresses[endereco.endereco]}
                          >
                            <ContainerAdress>
                              <ItemCheck>{endereco.nome}</ItemCheck>
                              <Item2Check>{endereco.endereco}</Item2Check>
                            </ContainerAdress>
                          </CheckBox>
                          <MapPin size={20} color="#00AD6C" />
                        </DivCheck>
                      </CheckboxItem>
                    ))}
                </ContCheck>
              ))}
            </ScrollContainer>
          </SearchRight>
        </ContainerSearch>
      </FirstLine>
    </ContainerCard>
  )
}
