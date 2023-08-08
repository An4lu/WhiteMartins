import { useEffect, useState } from 'react'
import { KanBanCard } from '../../components/KanBanCard'
import { PlacaCard } from '../../components/PlacaCard'
import { Text } from '../../components/Text'
import { ContainerFases, StyledFlex } from './styles'
import { Modal } from '../../components/Modal'

import {
  DynamoDBClient,
  ScanCommand,
  ScanCommandInput,
} from '@aws-sdk/client-dynamodb'

import { DynamoDBDocument, PutCommand } from '@aws-sdk/lib-dynamodb'

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
  product: string
  inicialweighing: string
  finalweighing: string
  measure: string
  loadingvolume: string
  controllerentry: string
  controllerweighing: string
  controllerloading: string
  controllerexited: string
  status: StatusType
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

interface Parameter {
  id: string
  plate: string
  created_at: string
  status: string
}

const client = new DynamoDBClient({
  region: import.meta.env.VITE_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY,
  },
})

const ddbDocClient = DynamoDBDocument.from(client)

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
  }

  const [placasData, setPlacasData] = useState<PlacaInfo[]>([
    {
      placa: 'SF7SF6',
      tempo: '10',
      company: 'Empresa A',
      NF: 12345,
      order: 539458,
      driver: 'João P. Freitas',
      CNH: 987654321,
      goal: 'Carregamento de Tanque',
      product: 'Nitrogênio',
      inicialweighing: '10:40 am',
      finalweighing: '120kg',
      measure: '10 Toneladas',
      loadingvolume: '300 m³',
      controllerentry: 'Leandra Silva',
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
      company: 'Empresa B',
      NF: 67890,
      order: 923847,
      driver: 'Ana L. Dourado',
      CNH: 123456789,
      goal: 'Meta B',
      product: 'Produto B',
      inicialweighing: '08:00 am',
      finalweighing: '200kg',
      measure: '10 Toneladas',
      loadingvolume: '200 m³',
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
      company: 'Empresa S',
      NF: 12345,
      order: 539458,
      driver: 'Silvio Armando',
      CNH: 955656391,
      goal: 'Carregamento de Tanque',
      product: 'Produto C',
      inicialweighing: '08:39 am',
      finalweighing: '08:39 am',
      measure: '10 Toneladas',
      loadingvolume: '08:39 am',
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
      company: 'Empresa Z',
      NF: 98377,
      order: 873564,
      driver: 'Marcia Oliver',
      CNH: 123455700,
      goal: 'Meta G',
      product: 'Produto D',
      inicialweighing: '09:00 am',
      finalweighing: '150kg',
      measure: '10 Toneladas',
      loadingvolume: '300 m³',
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
      company: 'Empresa C',
      NF: 54321,
      order: 345678,
      driver: 'Carlos Silva',
      CNH: 87654321,
      goal: 'Meta C',
      product: 'Produto E',
      inicialweighing: '10:15 am',
      finalweighing: '500kg',
      measure: '10 Toneladas',
      loadingvolume: '300 m³',
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
      company: 'Empresa D',
      NF: 45678,
      order: 234567,
      driver: 'Maria Santos',
      CNH: 7654321,
      goal: 'Meta D',
      product: 'Produto F',
      inicialweighing: '08:30 am',
      finalweighing: '300kg',
      measure: '10 Toneladas',
      loadingvolume: '400 m³',
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
      company: 'Empresa E',
      NF: 56789,
      order: 123456,
      driver: 'Pedro Oliveira',
      CNH: 654321,
      goal: 'Meta E',
      product: 'Produto G',
      inicialweighing: '09:45 am',
      finalweighing: '150kg',
      measure: '10 Toneladas',
      loadingvolume: '500 m³',
      controllerentry: 'K',
      controllerweighing: 'L',
      controllerloading: 'M',
      controllerexited: 'N',
      status: 'Liberado',
      entrance: '09:45 am',
      exit: '5:15 pm',
      waittime: '6 h 30 min',
      stage: 'Entrada',
    },
    {
      placa: 'HJK234',
      tempo: '12',
      company: 'Empresa F',
      NF: 98765,
      order: 789012,
      driver: 'Sandra Lima',
      CNH: 54321,
      goal: 'Meta F',
      product: 'Produto H',
      inicialweighing: '11:20 am',
      finalweighing: '100kg',
      measure: '10 Toneladas',
      loadingvolume: '100 m³',
      controllerentry: 'H',
      controllerweighing: 'J',
      controllerloading: 'K',
      controllerexited: 'L',
      status: 'Revisão',
      entrance: '11:20 am',
      exit: '7:00 pm',
      waittime: '7 h 40 min',
      stage: 'Entrada',
    },
    {
      placa: 'MNB432',
      tempo: '18',
      company: 'Empresa G',
      NF: 65432,
      order: 890123,
      driver: 'Fernando Rocha',
      CNH: 12345,
      goal: 'Meta G',
      product: 'Produto I',
      inicialweighing: '10:00 am',
      finalweighing: '250kg',
      measure: '10 Toneladas',
      loadingvolume: '200 m³',
      controllerentry: 'M',
      controllerweighing: 'N',
      controllerloading: 'O',
      controllerexited: 'P',
      status: 'Liberado',
      entrance: '10:00 am',
      exit: '5:00 pm',
      waittime: '7 h',
      stage: 'Entrada',
    },
    {
      placa: 'POI876',
      tempo: '22',
      company: 'Empresa H',
      NF: 87654,
      order: 901234,
      driver: 'Aline Souza',
      CNH: 54321,
      goal: 'Meta H',
      product: 'Produto J',
      inicialweighing: '08:00 am',
      finalweighing: '180kg',
      measure: '10 Toneladas',
      loadingvolume: '150 m³',
      controllerentry: 'T',
      controllerweighing: 'U',
      controllerloading: 'V',
      controllerexited: 'W',
      status: 'Aguardando',
      entrance: '08:00 am',
      exit: '3:30 pm',
      waittime: '7 h 30 min',
      stage: 'Entrada',
    },
    {
      placa: 'ZZZ999',
      tempo: '35',
      company: 'Empresa I',
      NF: 12345,
      order: 123456,
      driver: 'Marcos Oliveira',
      CNH: 987654,
      goal: 'Meta I',
      product: 'Produto K',
      inicialweighing: '09:30 am',
      finalweighing: '1000kg',
      measure: '10 Toneladas',
      loadingvolume: '400 m³',
      controllerentry: 'A',
      controllerweighing: 'B',
      controllerloading: 'C',
      controllerexited: 'D',
      status: 'Revisão',
      entrance: '09:30 am',
      exit: '5:30 pm',
      waittime: '8 h',
      stage: 'Entrada',
    },
    {
      placa: 'ABC123',
      tempo: '28',
      company: 'Empresa J',
      NF: 56789,
      order: 567890,
      driver: 'Luciana Silva',
      CNH: 1234567,
      goal: 'Meta J',
      product: 'Produto L',
      inicialweighing: '10:45 am',
      finalweighing: '400kg',
      measure: '10 Toneladas',
      loadingvolume: '250 m³',
      controllerentry: 'X',
      controllerweighing: 'Y',
      controllerloading: 'Z',
      controllerexited: 'W',
      status: 'Liberado',
      entrance: '10:45 am',
      exit: '6:30 pm',
      waittime: '7 h 45 min',
      stage: 'Entrada',
    },
  ])

  useEffect(() => {
    const getPlacas = async () => {
      const params: ScanCommandInput = {
        TableName: import.meta.env.VITE_TABLE_LICENSE_PLATES,
      }

      const command = new ScanCommand(params)

      const response = await ddbDocClient.send(command)

      const parameters = response.Items as unknown as Parameter[]

      console.log(parameters)
    }

    getPlacas()
  }, [])

  async function createPlate() {
    const params = {
      TableName: 'license_plates',
      Item: {
        id: '5',
        plate: 'SF7SF6',
        created_at: '2021-10-10',
        status: 'AguardandoCadastro',
      },
    }

    try {
      const data = await ddbDocClient.send(new PutCommand(params))
      console.log('Success', data)
    } catch (err) {
      console.log('Error', err)
    }
  }

  return (
    <StyledFlex>
      <Text css={{ fontWeight: '600', fontSize: '24px' }}>
        Acompanhamento Fases de Abastecimento
      </Text>
      <button onClick={createPlate}>Criar placa</button>
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
          product={selectedPlaca.product}
          inicialweighing={selectedPlaca.inicialweighing}
          finalweighing={selectedPlaca.finalweighing}
          measure={selectedPlaca.measure}
          loadingvolume={selectedPlaca.loadingvolume}
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
