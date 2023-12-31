import { styled } from '../../styles'

export const Overlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 980,
})

export const Dialog = styled('div', {
  backgroundColor: '$white',
  borderRadius: '8px',
  minHeight: '200px',
  width: '650px',
  position: 'relative',
})

export const FirstLine = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
  padding: '10px 40px',
  width: '100%',
  height: '100%',
})

export const TextPlaca = styled('span', {
  fontSize: '27px',
  fontWeight: '700',
  color: '$textlowgray',
})

export const Line = styled('div', {
  display: 'flex',
  backgroundColor: '$grayline',
  padding: '1px',
})

export const TitleLine = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '5px 40px',
})

export const ContainerText = styled('p', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: '10px',
  paddingBottom: '10px',
  gap: '5px',
  fontSize: '20px',
  fontWeight: '600',
  color: '$textlowgray',
})

export const TitleDesc = styled('p', {
  display: 'flex',
  flexDirection: 'row',
  fontWeight: '500',
  color: '$graytitle',
  fontSize: '12px',
  padding: '6px 0px',
})

export const TitleTime = styled('p', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'end',
  fontWeight: '500',
  color: '$graytitle',
  fontSize: '12px',
  padding: '2px 0px',
})

export const Description = styled('span', {
  marginLeft: '5px',
  color: '$textlowgray',
})

export const ContainerP = styled('span', {
  display: 'flex',
  flexDirection: 'row',
  padding: '0px 42px',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '12px',
})

export const SecondLine = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  padding: '10px 42px',
})

export const Right = styled('div', {
  width: '50%',
})

export const Left = styled('div', {
  width: '50%',
})

export const ContainerTime = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '10px 42px',
  marginBottom: '5px',
})

export const RightLine = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
})

export const ContainerStatus = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'end',
  gap: '5px',
  padding: '10px 0px',
  color: '$textlowgray',
  fontWeight: '700',
  fontSize: '15px',
})

export const ContainerPlaca = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '190px',
  height: '64px',
  color: '$blue',
  border: '4px solid $blue',
  borderRadius: '6px',
  backgroundColor: '$white',
})

export const PlacaBrasil = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  backgroundColor: '$blue',
  padding: '1px',
})

export const Status = styled(
  'div',
  {
    gap: '4px',
    color: '$white',
    fontSize: '13px',
    fontWeight: '500',
    letterSpacing: '0.6px',
    borderRadius: '4px',
    padding: '2px 13px',
  },
  {
    variants: {
      status: {
        AguardandoCadastro: {
          backgroundColor: '$bluecard',
        },
        Aguardando: {
          backgroundColor: '$yellow',
        },
        Revisão: {
          backgroundColor: '$red',
        },
        Liberado: {
          backgroundColor: '$green',
        },
        inicial: {
          backgroundColor: '$green',
        },
      },
    },
  },
)

export const NumPlaca = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '-3px',
  fontSize: '36px',
  fontWeight: '700',
  fontFamily: "'Play', sans-serif",
})

export const TextBrasil = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  color: '$white',
  fontWeight: '600',
  fontSize: '14px',
  letterSpacing: '0.5px',
  fontFamily: "'Play', sans-serif",
})

export const Image = styled('img', {
  width: '22px',
  height: '14px',
})

export const ThirdLine = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '7px 40px',
  margin: '10px 0px',
})

export const String = styled('span', {
  color: '$textlowgray',
  fontWeight: '700',
  fontSize: '14px',
})

export const ContainerSelect = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  gap: '8px',
  padding: '6px 0px',
})
