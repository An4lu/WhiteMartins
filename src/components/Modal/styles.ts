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
  width: '700px',
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
  padding: '12px 40px',
})

export const ContainerText = styled('p', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: '10px',
  gap: '5px',
  fontSize: '20px',
  fontWeight: '600',
  color: '$textlowgray',
})

export const LastLine = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export const ContainerItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '10px',
  padding: '10px 3px',
  fontSize: '14px',
})

export const TitleDesc = styled('p', {
  display: 'flex',
  flexDirection: 'row',
  fontWeight: '500',
  color: '$graytitle',
})

export const Description = styled('p', {
  marginLeft: '5px',
  color: '$textlowgray',
})

export const SecondLine = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  zIndex: 999,
  marginTop: '-378px',
  marginLeft: '324px',
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
  fontSize: '14px',
})

export const ContainerPlaca = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '189px',
  height: '64px',
  color: '$blue',
  border: '4px solid $blue',
  borderRadius: '6px',
  backgroundColor: '$white',
  marginTop: '8px',
})

export const PlacaBrasil = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  backgroundColor: '$blue',
  gap: '5px',
})

export const NumPlaca = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  height: '150px',
  fontSize: '36px',
  fontWeight: '700',
  letterSpacing: '0.8px',
  fontFamily: "'Play', sans-serif",
})

export const TextBrasil = styled('p', {
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

export const PlacaItem = styled('div', {
  fontSize: '14px',
  padding: '4px 0px',
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
