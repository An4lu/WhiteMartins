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
  status?:
    | 'AguardandoCadastro'
    | 'Aguardando'
    | 'Liberado'
    | 'Revisão'
    | 'inicial'
  onClick?: () => void
}

export const PlacaCard = ({
  placa,
  tempo,
  driver,
  order,
  status,
  onClick,
}: PlacaProps) => {
  return (
    <Container onClick={onClick}>
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
