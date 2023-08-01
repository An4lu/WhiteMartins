import {
  Container,
  FirstLine,
  LastLine,
  SecondLine,
  Status,
  TempoPlaca,
  TextDriver,
  TextPlaca,
} from './styles'

interface PlacaProps {
  placa: string
  tempo: string
  driver: string
  order: number
  status?: 'Aguardando Cadastro' | 'Aguardando'
}

export const PlacaCard = ({
  placa,
  tempo,
  driver,
  order,
  status,
}: PlacaProps) => {
  return (
    <Container>
      <FirstLine>
        <TextPlaca>{placa}</TextPlaca>
        <TempoPlaca>Tempo: {tempo}min</TempoPlaca>
      </FirstLine>
      <SecondLine>
        <TextDriver>Motorista: {driver}</TextDriver>
        <TextDriver>Ordem: {order}</TextDriver>
      </SecondLine>
      <LastLine>{status && <Status status={status}>{status}</Status>}</LastLine>
    </Container>
  )
}
