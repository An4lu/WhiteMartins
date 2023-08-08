import { FC, useState } from 'react'
import mercosulSvg from '../../assets/img/mercosul.svg'
import brasilPng from '../../assets/img/brasil.png'
import {
  Overlay,
  Dialog,
  FirstLine,
  TextPlaca,
  Line,
  TitleLine,
  Description,
  ContainerText,
  TitleDesc,
  SecondLine,
  ContainerPlaca,
  ContainerStatus,
  PlacaBrasil,
  NumPlaca,
  Image,
  TextBrasil,
  ThirdLine,
  String,
  ContainerSelect,
  Right,
  Left,
  ContainerP,
  Status,
  ContainerTime,
  RightLine,
  TitleTime,
} from './styles'
import { FileText, X } from '@phosphor-icons/react'
import Select from '../Select'
import { Button } from '../Button'
import { PlacaInfo } from '../../pages/Kanban'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  placa: string
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
  entrance: string
  exit: string
  status?: 'AguardandoCadastro' | 'Aguardando' | 'Liberado' | 'Revisão'
  waittime: string
  selectedPlaca?: PlacaInfo
  onStageChange?: (newStage: string) => void
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  placa,
  company,
  NF,
  order,
  driver,
  CNH,
  goal,
  product,
  inicialweighing,
  finalweighing,
  measure,
  loadingvolume,
  controllerentry,
  controllerweighing,
  controllerloading,
  controllerexited,
  entrance,
  exit,
  status,
  waittime,
  onStageChange,
}) => {
  const [selectedStage, setSelectedStage] = useState<string>('')

  if (!isOpen) {
    return null
  }

  const stageOptions = [
    { value: 'Entrada', label: 'Entrada' },
    { value: 'Pesagem Inicial', label: 'Pesagem Inicial' },
    { value: 'Fila', label: 'Fila' },
    { value: 'Carregamento', label: 'Carregamento' },
    { value: 'Pesagem Final', label: 'Pesagem Final' },
    { value: 'Saída', label: 'Saída' },
  ]

  const handleStageChange = (value: string) => {
    setSelectedStage(value)
  }

  const handleMoveToStage = () => {
    if (onStageChange && selectedStage) {
      onStageChange(selectedStage)
    }

    if (onClose) {
      onClose()
    }
  }
  return (
    <Overlay onClick={onClose}>
      <Dialog onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <FirstLine>
          <TextPlaca>{placa}</TextPlaca>
          <X onClick={onClose} size={27} color="#00AD6C" />
        </FirstLine>
        <Line />
        <TitleLine>
          <ContainerText>
            <FileText size={26} color="#00AD6C" />
            Detalhes
          </ContainerText>
        </TitleLine>
        <ContainerP>
          <ContainerPlaca>
            <PlacaBrasil>
              <Image src={mercosulSvg} alt="Mercosul" />
              <TextBrasil>BRASIL</TextBrasil>
              <Image src={brasilPng} alt="Brasil" />
            </PlacaBrasil>
            <NumPlaca>{placa}</NumPlaca>
          </ContainerPlaca>
          <ContainerStatus>
            Status {status && <Status status={status}>{status}</Status>}
          </ContainerStatus>
        </ContainerP>
        <SecondLine>
          <Right>
            <TitleDesc>
              Empresa: <Description> {company}</Description>
            </TitleDesc>
            <TitleDesc>
              NF: <Description> {NF}</Description>
            </TitleDesc>
            <TitleDesc>
              Ordem: <Description> {order}</Description>
            </TitleDesc>
            <TitleDesc>
              Placa: <Description> {placa}</Description>
            </TitleDesc>
            <TitleDesc>
              Motorista: <Description> {driver}</Description>
            </TitleDesc>
            <TitleDesc>
              CNH: <Description>{CNH}</Description>
            </TitleDesc>
            <TitleDesc>
              Objetivo: <Description> {goal}</Description>
            </TitleDesc>
            <TitleDesc>
              Produto: <Description>{product}</Description>
            </TitleDesc>
          </Right>
          <Left>
            <TitleDesc>
              Pesagem Inicial: <Description>{inicialweighing}</Description>
            </TitleDesc>
            <TitleDesc>
              Pesagem Final: <Description>{finalweighing}</Description>
            </TitleDesc>
            <TitleDesc>
              Medida: <Description>{measure}</Description>
            </TitleDesc>
            <TitleDesc>
              Volume de Carregamento: <Description>{loadingvolume}</Description>
            </TitleDesc>
            <TitleDesc>
              Controlador Entrada: <Description>{controllerentry}</Description>
            </TitleDesc>
            <TitleDesc>
              Controlador Pesagem:
              <Description>{controllerweighing}</Description>
            </TitleDesc>
            <TitleDesc>
              Controlador Carregamento:
              <Description>{controllerloading}</Description>
            </TitleDesc>
            <TitleDesc>
              Controlador Saída: <Description>{controllerexited}</Description>
            </TitleDesc>
          </Left>
        </SecondLine>
        <ContainerTime>
          <RightLine>
            <TitleTime>
              Horário Entrada: <Description> {entrance}</Description>
            </TitleTime>
            <TitleTime>
              Horário Saída: <Description> {exit}</Description>
            </TitleTime>
          </RightLine>
          <TitleTime>
            Tempo de Espera: <Description>{waittime}</Description>
          </TitleTime>
        </ContainerTime>
        <Line />
        <ThirdLine>
          <String>Mover para</String>
          <ContainerSelect>
            <Select
              onValueChange={handleStageChange}
              id="select"
              options={stageOptions}
            />
            <Button
              css={{ width: '60px', height: '28px' }}
              onClick={handleMoveToStage}
            >
              Mover
            </Button>
          </ContainerSelect>
        </ThirdLine>
      </Dialog>
    </Overlay>
  )
}
