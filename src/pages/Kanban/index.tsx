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
