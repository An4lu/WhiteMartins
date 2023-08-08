import estadosBrasil from './estadosBrasil.json'
import { CheckBox } from '../Checkbox'
import { InputSearch } from '../InputSearch'
import { Line } from '../Modal/styles'
import { useCallback, useEffect, useState } from 'react'
import { DashboardCardSecond } from '../../components/DashboardCardSecond'
import { DashboardCard } from '../../components/DashboardCard/index'
import { Text } from '../../components/Text'
import { Truck, Cylinder, MapPin } from '@phosphor-icons/react'
import {
  CheckboxItem,
  ContCheck,
  ContInput,
  ContainerAdress,
  ContainerCard,
  ContainerSearch,
  DivCheck,
  FirstLinee,
  Item2Check,
  ItemCheck,
  ScrollContainer,
  SearchLeft,
  SearchRight,
  Title,
  TitleCheck,
  TitleSecond,
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
import { Button } from '../Button'
import { CardVolume } from '../CardVolume'

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
  const [averageData, setAverageData] = useState({
    tempocadastro: 0,
    tempocarregamento: 0,
    tempoetapa: 0,
    tempopesagem: 0,
    carretas: 0,
    cilindros: 0,
  })

  const calculateAverages = useCallback(() => {
    const filteredStates = estadosBrasil.filter(
      (estado) => selectedStates[estado.id],
    )
    const totalItems = filteredStates.length

    if (totalItems === 0) {
      setAverageData({
        tempocadastro: 0,
        tempocarregamento: 0,
        tempoetapa: 0,
        tempopesagem: 0,
        carretas: 0,
        cilindros: 0,
      })
      return
    }

    const totalValues = filteredStates.reduce(
      (acc, estado) => ({
        tempocadastro: acc.tempocadastro + (estado.tempocadastro || 0),
        tempocarregamento:
          acc.tempocarregamento + (estado.tempocarregamento || 0),
        tempoetapa: acc.tempoetapa + (estado.tempoetapa || 0),
        tempopesagem: acc.tempopesagem + (estado.tempopesagem || 0),
        carretas: acc.carretas + (estado.carretas || 0),
        cilindros: acc.cilindros + (estado.cilindros || 0),
      }),
      {
        tempocadastro: 0,
        tempocarregamento: 0,
        tempoetapa: 0,
        tempopesagem: 0,
        carretas: 0,
        cilindros: 0,
      },
    )

    setAverageData({
      tempocadastro: parseFloat(
        (totalValues.tempocadastro / totalItems).toFixed(2),
      ),
      tempocarregamento: parseFloat(
        (totalValues.tempocarregamento / totalItems).toFixed(2),
      ),
      tempoetapa: parseFloat((totalValues.tempoetapa / totalItems).toFixed(2)),
      tempopesagem: parseFloat(
        (totalValues.tempopesagem / totalItems).toFixed(2),
      ),
      carretas: totalValues.carretas,
      cilindros: totalValues.cilindros,
    })
  }, [selectedStates])

  useEffect(() => {
    calculateAverages()
  }, [calculateAverages])

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
      [id]: value,
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
    <StyledFlex>
      <Text css={{ fontWeight: '600', fontSize: '24px' }}>
        Cockpit das Plantas
      </Text>
      <FirstLine>
        <DashboardCard
          texttitle="Tempo Médio de Cadastro"
          timemin={averageData.tempocadastro}
          state="green"
        />
        <DashboardCard
          texttitle="Tempo Médio de Carregamento"
          timemin={averageData.tempocarregamento}
          state="yellow"
        />
        <DashboardCard
          texttitle="Tempo por Etapa"
          timemin={averageData.tempoetapa}
          state="green"
        />
        <DashboardCard
          texttitle="Tempo Médio de Pesagem"
          timemin={averageData.tempopesagem}
          state="red"
        />
      </FirstLine>
      <SecondLine>
        <ContainerLeft>
          <FirstRow>
            <DashboardCardSecond
              texttitle="Quantidade de Carretas"
              num={averageData.carretas}
              state="green"
              icon={<Truck size={46} />}
            />
            <DashboardCardSecond
              texttitle="Quantidade de Cilindros"
              num={averageData.cilindros}
              state="green"
              icon={<Cylinder size={46} />}
            />
          </FirstRow>

          <ContainerCard>
            <FirstLinee>
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
            </FirstLinee>
          </ContainerCard>
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
