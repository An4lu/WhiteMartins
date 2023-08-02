import { FC } from 'react'
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
} from './styles'
import { FileText, X } from '@phosphor-icons/react'
import { Status } from '../PlacaCard/styles'

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
  status: string
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
}) => {
  if (!isOpen) {
    return null
  }

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
            <TitleDesc>
              Controlador Saída: <Description> {controllerexited}</Description>
            </TitleDesc>
          </ContainerItem>
          <ContainerStatus>
            Status: <Status> {status}</Status>
          </ContainerStatus>
        </TitleLine>
        <SecondLine>
          <ContainerPlaca>{placa}</ContainerPlaca>
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
        </SecondLine>
      </Dialog>
    </Overlay>
  )
}
