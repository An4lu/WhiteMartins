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

interface PlacaInfo {
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
  status: 'AguardandoCadastro' | 'Aguardando' | 'Liberado' | 'Revisão'
  entrance: string
  exit: string
  waittime: string
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

  const placasData: PlacaInfo[] = [
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
    },
  ]

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
        id: '3',
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
          {placasData.map((placaInfo, index) => (
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
        <KanBanCard>Pesagem Inicial</KanBanCard>
        <KanBanCard>Fila</KanBanCard>
        <KanBanCard>Carregamento</KanBanCard>
        <KanBanCard>Pesagem Final</KanBanCard>
        <KanBanCard>Saída</KanBanCard>
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
        />
      )}
    </StyledFlex>
  )
}
