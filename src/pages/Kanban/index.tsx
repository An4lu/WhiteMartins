import { useEffect, useState } from 'react'
import { KanBanCard } from '../../components/KanBanCard'
import { PlacaCard } from '../../components/PlacaCard'
import { Text } from '../../components/Text'
import { ContainerFases, ContainerText, StyledFlex } from './styles'
import { Modal } from '../../components/Modal'

import { DynamoDBClient } from '@aws-sdk/client-dynamodb'

import {
  ScanCommandInput,
  DynamoDBDocument,
  ScanCommand,
  // PutCommand,
} from '@aws-sdk/lib-dynamodb'

type StatusType =
  | 'AguardandoCadastro'
  | 'Aguardando'
  | 'Revisão'
  | 'Liberado'
  | 'inicial'

export interface PlacaInfo {
  id: string
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
      placaInfo.id === selectedPlaca?.id
        ? { ...placaInfo, stage: newStage as PlacaInfo['stage'] }
        : placaInfo,
    )

    setPlacasData(updatedPlacasData)
  }

  const [placasData, setPlacasData] = useState<PlacaInfo[]>([
    {
      id: '1',
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

      const placasFromParameters = parameters.map((param) => ({
        id: param.id,
        placa: param.plate,
        status: param.status as StatusType,
        stage: 'Entrada' as const,
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
        entrance: '12:23 am',
        exit: '3:30 pm',
        waittime: '3 h',
      }))

      setPlacasData(placasFromParameters)
    }

    getPlacas()
  }, [])

  // async function createPlate() {
  //   const params = {
  //     TableName: 'license_plates',
  //     Item: {
  //       id: '4',
  //       plate: 'PA8AS2',
  //       created_at: '2021-10-10',
  //       status: 'AguardandoCadastro',
  //     },
  //   }

  //   try {
  //     const data = await ddbDocClient.send(new PutCommand(params))
  //     console.log('Success', data)
  //   } catch (err) {
  //     console.log('Error', err)
  //   }
  // }

  return (
    <StyledFlex>
      <ContainerText>
        <Text css={{ fontWeight: '600', fontSize: '24px' }}>
          Acompanhamento Fases de Abastecimento
        </Text>
        {/* <button onClick={createPlate}>Criar placa</button> */}
      </ContainerText>
      <ContainerFases>
        <KanBanCard>
          Entrada
          {placasData
            .filter((placaInfo) => placaInfo.stage === 'Entrada')
            .map((placaInfo) => (
              <PlacaCard
                key={placaInfo.id}
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
            .map((placaInfo) => (
              <PlacaCard
                key={placaInfo.id}
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
            .map((placaInfo) => (
              <PlacaCard
                key={placaInfo.id}
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
            .map((placaInfo) => (
              <PlacaCard
                key={placaInfo.id}
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
            .map((placaInfo) => (
              <PlacaCard
                key={placaInfo.id}
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
            .map((placaInfo) => (
              <PlacaCard
                key={placaInfo.id}
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
