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
    {
      placa: 'SHJD5U',
      tempo: '15',
      company: 'Company S',
      NF: 12345,
      order: 539458,
      driver: 'Silvio Armando',
      CNH: 955656391,
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
      placa: 'KD9UY7',
      tempo: '60',
      company: 'Company Z',
      NF: 98377,
      order: 873564,
      driver: 'Marcia Oliver',
      CNH: 123455700,
      goal: 'Goal G',
      finalweighing: '150kg',
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
    {
      placa: 'ASD123',
      tempo: '15',
      company: 'Company C',
      NF: 54321,
      order: 345678,
      driver: 'Carlos Silva',
      CNH: 87654321,
      goal: 'Goal C',
      finalweighing: '500kg',
      controllerentry: 'A',
      controllerweighing: 'B',
      controllerloading: 'C',
      controllerexited: 'D',
      status: 'AguardandoCadastro',
      entrance: '10:15 am',
      exit: '2:45 pm',
      waittime: '4 h',
      stage: 'Entrada',
    },
    {
      placa: 'QWE789',
      tempo: '20',
      company: 'Company D',
      NF: 45678,
      order: 234567,
      driver: 'Maria Santos',
      CNH: 7654321,
      goal: 'Goal D',
      finalweighing: '300kg',
      controllerentry: 'P',
      controllerweighing: 'Q',
      controllerloading: 'R',
      controllerexited: 'S',
      status: 'Aguardando',
      entrance: '08:30 am',
      exit: '4:00 pm',
      waittime: '7 h 30 min',
      stage: 'Entrada',
    },
    {
      placa: 'JKL567',
      tempo: '25',
      company: 'Company E',
      NF: 56789,
      order: 123456,
      driver: 'Pedro Oliveira',
      CNH: 654321,
      goal: 'Goal E',
      finalweighing: '150kg',
      controllerentry: 'K',
      controllerweighing: 'L',
      controllerloading: 'M',
      controllerexited: 'N',
      status: 'Liberado',
      entrance: '09:45 am',
      exit: '5:15 pm',
      waittime: '6 h 30 min',
      stage: 'Pesagem Inicial',
    },
    {
      placa: 'HJK234',
      tempo: '12',
      company: 'Company F',
      NF: 98765,
      order: 789012,
      driver: 'Sandra Lima',
      CNH: 54321,
      goal: 'Goal F',
      finalweighing: '100kg',
      controllerentry: 'H',
      controllerweighing: 'J',
      controllerloading: 'K',
      controllerexited: 'L',
      status: 'Revisão',
      entrance: '11:20 am',
      exit: '7:00 pm',
      waittime: '7 h 40 min',
      stage: 'Fila',
    },
    {
      placa: 'MNB432',
      tempo: '18',
      company: 'Company G',
      NF: 65432,
      order: 890123,
      driver: 'Fernando Rocha',
      CNH: 12345,
      goal: 'Goal G',
      finalweighing: '250kg',
      controllerentry: 'M',
      controllerweighing: 'N',
      controllerloading: 'O',
      controllerexited: 'P',
      status: 'Liberado',
      entrance: '10:00 am',
      exit: '5:00 pm',
      waittime: '7 h',
      stage: 'Fila',
    },
    {
      placa: 'POI876',
      tempo: '22',
      company: 'Company H',
      NF: 87654,
      order: 901234,
      driver: 'Aline Souza',
      CNH: 54321,
      goal: 'Goal H',
      finalweighing: '180kg',
      controllerentry: 'T',
      controllerweighing: 'U',
      controllerloading: 'V',
      controllerexited: 'W',
      status: 'Aguardando',
      entrance: '08:00 am',
      exit: '3:30 pm',
      waittime: '7 h 30 min',
      stage: 'Carregamento',
    },
    {
      placa: 'ZZZ999',
      tempo: '35',
      company: 'Company I',
      NF: 12345,
      order: 123456,
      driver: 'Marcos Oliveira',
      CNH: 987654,
      goal: 'Goal I',
      finalweighing: '1000kg',
      controllerentry: 'A',
      controllerweighing: 'B',
      controllerloading: 'C',
      controllerexited: 'D',
      status: 'Revisão',
      entrance: '09:30 am',
      exit: '5:30 pm',
      waittime: '8 h',
      stage: 'Pesagem Final',
    },
    {
      placa: 'ABC123',
      tempo: '28',
      company: 'Company J',
      NF: 56789,
      order: 567890,
      driver: 'Luciana Silva',
      CNH: 1234567,
      goal: 'Goal J',
      finalweighing: '400kg',
      controllerentry: 'X',
      controllerweighing: 'Y',
      controllerloading: 'Z',
      controllerexited: 'W',
      status: 'Liberado',
      entrance: '10:45 am',
      exit: '6:30 pm',
      waittime: '7 h 45 min',
      stage: 'Saída',
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
