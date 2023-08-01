import { KanBanCard } from '../../components/KanBanCard'
import { PlacaCard } from '../../components/PlacaCard'
import { Text } from '../../components/Text'
import { ContainerFases, StyledFlex } from './styles'

export const Kanban = () => {
  const placasData = [
    {
      placa: 'SF7SF6',
      tempo: '15',
      driver: 'João P. Freitas',
      order: 539458,
      status: 'Aguardando Cadastro',
    },
    {
      placa: 'OI9SD4',
      tempo: '30',
      driver: 'Ana L. Dourado',
      order: 923847,
      status: 'Aguardando',
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
            />
          ))}
        </KanBanCard>
      </ContainerFases>
    </StyledFlex>
  )
}
