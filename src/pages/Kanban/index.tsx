import { useState } from 'react'
import { KanBanCard } from '../../components/KanBanCard'
import { PlacaCard } from '../../components/PlacaCard'
import { Text } from '../../components/Text'
import { ContainerFases, StyledFlex } from './styles'
import { Modal } from '../../components/Modal'

export const Kanban = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedPlaca, setSelectedPlaca] = useState(null)

  const handlePlacaClick = (placaInfo) => {
    setSelectedPlaca(placaInfo)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const placasData = [
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
      status: 'Aguardando Cadastro',
      entrance: '12:23 am',
      exit: '3:30 pm',
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
      controllerentry: 'Controller X',
      controllerweighing: 'Controller Y',
      controllerloading: 'Controller Z',
      controllerexited: 'Controller W',
      status: 'Aguardando',
      entrance: '09:00 am',
      exit: '6:30 pm',
    },
  ]

  return (
    <StyledFlex>
      <Text css={{ fontWeight: '600', fontSize: '24px' }}>
        Acompanhamento Fases de Abastecimento
      </Text>
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
        <KanBanCard>
          Saída
          {placasData.map((placaInfo, index) => (
            <PlacaCard
              key={index}
              placa={placaInfo.placa}
              tempo={placaInfo.tempo}
              driver={placaInfo.driver}
              order={placaInfo.order}
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
        />
      )}
    </StyledFlex>
  )
}
