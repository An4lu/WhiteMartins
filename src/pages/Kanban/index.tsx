import { useEffect, useState } from 'react'
import { KanBanCard } from '../../components/KanBanCard'
import { PlacaCard } from '../../components/PlacaCard'
import { Text } from '../../components/Text'
import { ContainerFases, StyledFlex } from './styles'
import { Modal } from '../../components/Modal'

type StatusType = 'AguardandoCadastro' | 'Aguardando' | 'Revisão' | 'Liberado'

export interface PlacaInfo {
  placa: string
  tempo: string
  company: string
  NF: number
  order: number
  driver: string
  CNH: number
  goal: string
  finalweighing: string
  controllerentry: string
  controllerweighing: string
  controllerloading: string
  controllerexited: string
  status?: StatusType
  entrance: string
  exit: string
  waittime: string
  stage:
    | 'Entrada'
    | 'Pesagem Inicial'
    | 'Fila'
    | 'Carregamento'
    | 'Pesagem Final'
    | 'Saída'
}

export const Kanban = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedPlaca, setSelectedPlaca] = useState<PlacaInfo | null>(null)

  const handlePlacaClick = (placaInfo: PlacaInfo) => {
    setSelectedPlaca(placaInfo)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleStageChange = (newStage: string) => {
    if (
      ![
        'Entrada',
        'Pesagem Inicial',
        'Fila',
        'Carregamento',
        'Pesagem Final',
        'Saída',
      ].includes(newStage)
    ) {
      console.error('Invalid stage:', newStage)
      return
    }

    const updatedPlacasData = placasData.map((placaInfo) =>
      placaInfo.placa === selectedPlaca?.placa
        ? { ...placaInfo, stage: newStage as PlacaInfo['stage'] }
        : placaInfo,
    )

    setPlacasData(updatedPlacasData)

    localStorage.setItem('placasData', JSON.stringify(updatedPlacasData))
  }

  useEffect(() => {
    const storedPlacasData = localStorage.getItem('placasData')
    if (storedPlacasData) {
      setPlacasData(JSON.parse(storedPlacasData))
    }
  }, [])

  const [placasData, setPlacasData] = useState<PlacaInfo[]>([
    {
      placa: 'SF7SF6',
      tempo: '10',
      company: 'Company A',
      NF: 12345,
      order: 539458,
      driver: 'João P. Freitas',
      CNH: 987654321,
      goal: 'Carregamento de Tanque',
      finalweighing: '08:39 am',
      controllerentry: '08:39 am',
      controllerweighing: '08:39 am',
      controllerloading: '08:39 am',
      controllerexited: '08:39 am',
      status: 'Revisão',
      entrance: '12:23 am',
      exit: '3:30 pm',
      waittime: '3 h',
      stage: 'Entrada',
    },
    {
      placa: 'OI9SD4',
      tempo: '30',
      company: 'Company B',
      NF: 67890,
      order: 923847,
      driver: 'Ana L. Dourado',
      CNH: 123456789,
      goal: 'Goal B',
      finalweighing: '200kg',
      controllerentry: 'X',
      controllerweighing: 'Y',
      controllerloading: 'Z',
      controllerexited: 'W',
      status: 'Liberado',
      entrance: '09:00 am',
      exit: '6:30 pm',
      waittime: '10 min',
      stage: 'Entrada',
    },
  ])

  return (
    <StyledFlex>
      <Text css={{ fontWeight: '600', fontSize: '24px' }}>
        Acompanhamento Fases de Abastecimento
      </Text>
      <ContainerFases>
        <KanBanCard>
          Entrada
          {placasData
            .filter((placaInfo) => placaInfo.stage === 'Entrada')
            .map((placaInfo, index) => (
              <PlacaCard
                key={index}
                placa={placaInfo.placa}
                tempo={placaInfo.tempo}
                driver={placaInfo.driver}
                order={placaInfo.order}
                status={placaInfo.status}
                onClick={() => handlePlacaClick(placaInfo)}
              />
            ))}
        </KanBanCard>
        <KanBanCard>
          Pesagem Inicial
          {placasData
            .filter((placaInfo) => placaInfo.stage === 'Pesagem Inicial')
            .map((placaInfo, index) => (
              <PlacaCard
                key={index}
                placa={placaInfo.placa}
                tempo={placaInfo.tempo}
                driver={placaInfo.driver}
                order={placaInfo.order}
                status={placaInfo.status}
                onClick={() => handlePlacaClick(placaInfo)}
              />
            ))}
        </KanBanCard>
        <KanBanCard>
          Fila
          {placasData
            .filter((placaInfo) => placaInfo.stage === 'Fila')
            .map((placaInfo, index) => (
              <PlacaCard
                key={index}
                placa={placaInfo.placa}
                tempo={placaInfo.tempo}
                driver={placaInfo.driver}
                order={placaInfo.order}
                status={placaInfo.status}
                onClick={() => handlePlacaClick(placaInfo)}
              />
            ))}
        </KanBanCard>
        <KanBanCard>
          Carregamento
          {placasData
            .filter((placaInfo) => placaInfo.stage === 'Carregamento')
            .map((placaInfo, index) => (
              <PlacaCard
                key={index}
                placa={placaInfo.placa}
                tempo={placaInfo.tempo}
                driver={placaInfo.driver}
                order={placaInfo.order}
                status={placaInfo.status}
                onClick={() => handlePlacaClick(placaInfo)}
              />
            ))}
        </KanBanCard>
        <KanBanCard>
          Pesagem Final
          {placasData
            .filter((placaInfo) => placaInfo.stage === 'Pesagem Final')
            .map((placaInfo, index) => (
              <PlacaCard
                key={index}
                placa={placaInfo.placa}
                tempo={placaInfo.tempo}
                driver={placaInfo.driver}
                order={placaInfo.order}
                status={placaInfo.status}
                onClick={() => handlePlacaClick(placaInfo)}
              />
            ))}
        </KanBanCard>
        <KanBanCard>
          Saída
          {placasData
            .filter((placaInfo) => placaInfo.stage === 'Saída')
            .map((placaInfo, index) => (
              <PlacaCard
                key={index}
                placa={placaInfo.placa}
                tempo={placaInfo.tempo}
                driver={placaInfo.driver}
                order={placaInfo.order}
                status={placaInfo.status}
                onClick={() => handlePlacaClick(placaInfo)}
              />
            ))}
        </KanBanCard>
      </ContainerFases>

      {isModalOpen && selectedPlaca && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          placa={selectedPlaca.placa}
          company={selectedPlaca.company}
          NF={selectedPlaca.NF}
          order={selectedPlaca.order}
          driver={selectedPlaca.driver}
          CNH={selectedPlaca.CNH}
          goal={selectedPlaca.goal}
          finalweighing={selectedPlaca.finalweighing}
          controllerentry={selectedPlaca.controllerentry}
          controllerweighing={selectedPlaca.controllerweighing}
          controllerloading={selectedPlaca.controllerloading}
          controllerexited={selectedPlaca.controllerexited}
          entrance={selectedPlaca.entrance}
          exit={selectedPlaca.exit}
          status={selectedPlaca.status}
          waittime={selectedPlaca.waittime}
          selectedPlaca={selectedPlaca}
          onStageChange={handleStageChange}
        />
      )}
    </StyledFlex>
  )
}
