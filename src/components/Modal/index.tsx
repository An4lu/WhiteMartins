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
  ContainerItem,
  ContainerText,
  TitleDesc,
  SecondLine,
  ContainerPlaca,
  PlacaItem,
  ContainerStatus,
  PlacaBrasil,
  NumPlaca,
  Image,
  TextBrasil,
  ThirdLine,
  String,
  ContainerSelect,
  LastLine,
} from './styles'
import { FileText, X } from '@phosphor-icons/react'
import { Status } from '../PlacaCard/styles'
import Select from '../Select'
import { Button } from '../Button'
import { PlacaInfo } from '../../pages/Kanban'

type StatusType = 'AguardandoCadastro' | 'Aguardando' | 'Revisão' | 'Liberado'

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
  finalweighing: string
  controllerentry: string
  controllerweighing: string
  controllerloading: string
  controllerexited: string
  entrance: string
  exit: string
  status?: StatusType
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
  finalweighing,
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
  if (!isOpen) {
    return null
  }

  const [selectedStage, setSelectedStage] = useState<string>('');

  const stageOptions = [
    { value: 'Entrada', label: 'Entrada' },
    { value: 'Pesagem Inicial', label: 'Pesagem Inicial' },
    { value: 'Fila', label: 'Fila' },
    { value: 'Carregamento', label: 'Carregamento' },
    { value: 'Pesagem Final', label: 'Pesagem Final' },
    { value: 'Saída', label: 'Saída' },
  ];

  const handleStageChange = (value: string) => {
    setSelectedStage(value);
  };

  const handleMoveToStage = () => {
    if (onStageChange && selectedStage) {
      onStageChange(selectedStage);
    }

    if (onClose) {
      onClose();
    }
  };
  return (
    <Overlay onClick={onClose}>
      <Dialog onClick={(e) => e.stopPropagation()}>
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
          <ContainerItem>
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
              CNH: <Description> {CNH}</Description>
            </TitleDesc>
            <TitleDesc>
              Objetivo: <Description> {goal}</Description>
            </TitleDesc>
            <TitleDesc>
              Pesagem Final: <Description> {finalweighing}</Description>
            </TitleDesc>
            <TitleDesc>
              Controlador Entrada: <Description> {controllerentry}</Description>
            </TitleDesc>
            <TitleDesc>
              Controlador Pesagem:
              <Description> {controllerweighing}</Description>
            </TitleDesc>
            <TitleDesc>
              Controlador Carregamento:
              <Description> {controllerloading}</Description>
            </TitleDesc>
            <LastLine>
              <TitleDesc>
                Controlador Saída:
                <Description> {controllerexited}</Description>
              </TitleDesc>
              <TitleDesc>
                Tempo de Espera:
                <Description> {waittime}</Description>
              </TitleDesc>
            </LastLine>
          </ContainerItem>
        </TitleLine>
        <SecondLine>
          <ContainerStatus>
            Status: <Status> {status}</Status>
          </ContainerStatus>
          <PlacaItem>
            <TitleDesc>
              Horário Entrada: <Description> {entrance}</Description>
            </TitleDesc>
          </PlacaItem>
          <PlacaItem>
            <TitleDesc>
              Horário Saída: <Description> {exit}</Description>
            </TitleDesc>
          </PlacaItem>
          <ContainerPlaca>
            <PlacaBrasil>
              <Image src={mercosulSvg} alt="Mercosul" />
              <TextBrasil>BRASIL</TextBrasil>
              <Image src={brasilPng} alt="Brasil" />
            </PlacaBrasil>
            <NumPlaca>{placa}</NumPlaca>
          </ContainerPlaca>
        </SecondLine>
        <Line />
        <ThirdLine>
          <String>Mover para</String>
          <ContainerSelect>
            <Select
              onValueChange={handleStageChange}
              id="select"
              options={stageOptions}
            />
            <Button css={{ width: '70px' }} onClick={handleMoveToStage}>
              Mover
            </Button>
          </ContainerSelect>
        </ThirdLine>
      </Dialog>
    </Overlay>
  )
}
